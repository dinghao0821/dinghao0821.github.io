const profile = window.PROFILE;
for (const id of ['name','card-name','footer-name']) document.getElementById(id).textContent = profile.name;
document.querySelector('.brand').textContent = profile.name;
document.title = `${profile.name} · 个人主页`;

document.getElementById('name').append(element('small', ' Ding Hao'));
document.getElementById('bio').textContent = profile.bio;
document.getElementById('interests').textContent = profile.interests;
document.getElementById('year').textContent = new Date().getFullYear();
const emptyText = {experience:['实习经历待补充','公司、职位与工作内容'],education:['教育经历待补充','学校、专业、学位与就读时间'],publications:['论文信息待补充','论文标题、作者、发表信息与链接'],projects:['项目经历待补充','项目介绍、技术栈与个人贡献'],awards:['荣誉奖项待补充','奖项名称与获奖时间']};
function element(tag, text, className) {const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;return el;}
function resourceLink(url, label) {
  if (!url || !/^https?:\/\//i.test(url)) return null;
  const link = element('a', label, 'resource-link');
  link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
  return link;
}
function tagList(tags) {
  const row = element('div', '', 'tags');
  for (const tag of tags || []) row.append(element('span', tag));
  return row;
}
for (const key of Object.keys(emptyText)) {
  const container = document.getElementById(`${key}-content`);
  const entries = profile[key] || [];
  if (!entries.length) {
    const box = element('div', '', 'empty');
    box.append(element('strong', emptyText[key][0]), element('span', emptyText[key][1]));
    container.append(box); continue;
  }
  for (const item of entries) {
    const paper = key === 'publications';
    const project = key === 'projects';
    const article = element('article', '', paper ? 'publication' : project ? 'project' : 'entry');
    let content = article;
    if (paper) {
      const venue = element('div', '', 'publication-venue');
      venue.append(element('span', item.venue || 'PUBLICATION'), element('small', item.venueNote || ''));
      content = element('div', '', 'publication-content');
      article.append(venue, content);
    }
    content.append(element('h3', item.title));
    if (item.meta) content.append(element('div', item.meta, 'meta'));
    let body = content;
    if (project) { body = element('div', '', 'project-body'); content.append(body); }
    if (item.tags) body.append(tagList(item.tags));
    if (item.description) body.append(element('p', item.description));
    const link = resourceLink(item.url, paper ? '阅读论文 ↗' : '代码仓库 ↗');
    if (link) body.append(link);
    if (item.abstract) {
      const details = document.createElement('details');
      details.append(element('summary', '研究摘要'), element('p', item.abstract)); body.append(details);
    }
    if (item.details) {
      if (project) {
        const list = element('ul', '', 'project-highlights');
        for (const text of item.details.slice(0, 2)) list.append(element('li', text));
        body.append(list);
      }
      const remaining = project ? item.details.slice(2) : item.details;
      if (remaining.length) {
        const details = document.createElement('details');
        details.append(element('summary', project ? '更多项目细节' : '工作内容'));
        const list = document.createElement('ul');
        for (const text of remaining) list.append(element('li', text));
        details.append(list); body.append(details);
      }
    }
    container.append(article);
  }
}
const themeButton=document.getElementById('theme');
function setTheme(dark){document.documentElement.dataset.theme=dark?'dark':'light';themeButton.textContent=dark?'☀':'☾';themeButton.setAttribute('aria-pressed',String(dark));themeButton.setAttribute('aria-label',dark?'切换到浅色模式':'切换到深色模式');}
let savedTheme;try{savedTheme=localStorage.getItem('homepage-theme');}catch{}
setTheme(savedTheme?savedTheme==='dark':matchMedia('(prefers-color-scheme: dark)').matches);
themeButton.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';setTheme(dark);try{localStorage.setItem('homepage-theme',dark?'dark':'light');}catch{}});
