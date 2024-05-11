function getButton(name) {
  return document.getElementById(name);
}

let currentButton;
let pageList = ['index','project-page', 'donate-page', 'volunteer-page', 'contact-page' ];
let buttonList = [getButton('index-button'), getButton('project-button'), getButton('donate-button'), getButton('volunteer-button'), getButton('contact-button')];



const currPage_Header = window.getRelativePath().page;
console.log(currPage_Header);
for(let i=0; i<buttonList.length; i++){
  if(currPage_Header != pageList[i]){
    buttonList[i].style.fontWeight = 300;
  }
  else{
    buttonList[i].style.fontWeight = 500;
  }
}


const anchorElements = document.querySelector('.master-header').querySelectorAll('a');
const newRelPath_Header = window.getRelativePath().newPath;
console.log(newRelPath_Header);

for(const anchor of anchorElements){
  const url = new URL(anchor.href, window.location.href);
  const relativePath = url.pathname.substring(1);

  anchor.href = newRelPath_Header + relativePath;
  console.log(newRelPath_Header + " " + relativePath);
  console.log(anchor.href);
}