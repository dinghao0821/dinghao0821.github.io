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
for(const key of Object.keys(emptyText)){
  const container=document.getElementById(`${key}-content`);
  const entries=profile[key] || [];
  if(!entries.length){const box=element('div','','empty');box.append(element('strong',emptyText[key][0]),element('span',emptyText[key][1]));container.append(box);continue;}
  for(const item of entries){const article=element('article','','entry');article.append(element('h3',item.title));if(item.meta)article.append(element('div',item.meta,'meta'));if(item.description)article.append(element('p',item.description));if(item.url && /^https?:\/\//i.test(item.url)){const link=element('a',key==='publications'?'阅读论文 ↗':'查看项目 ↗');link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';article.append(link);}if(item.abstract){const details=document.createElement('details');details.append(element('summary','摘要'),element('p',item.abstract));article.append(details);}if(item.tags){const tags=element('div','','tags');for(const tag of item.tags)tags.append(element('span',tag));article.append(tags);}if(item.details){const detail=document.createElement('details');detail.append(element('summary','工作内容'));const list=document.createElement('ul');for(const text of item.details)list.append(element('li',text));detail.append(list);article.append(detail);}container.append(article);}
}
const themeButton=document.getElementById('theme');
function setTheme(dark){document.documentElement.dataset.theme=dark?'dark':'light';themeButton.textContent=dark?'☀':'☾';themeButton.setAttribute('aria-pressed',String(dark));themeButton.setAttribute('aria-label',dark?'切换到浅色模式':'切换到深色模式');}
let savedTheme;try{savedTheme=localStorage.getItem('homepage-theme');}catch{}
setTheme(savedTheme?savedTheme==='dark':matchMedia('(prefers-color-scheme: dark)').matches);
themeButton.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';setTheme(dark);try{localStorage.setItem('homepage-theme',dark?'dark':'light');}catch{}});
