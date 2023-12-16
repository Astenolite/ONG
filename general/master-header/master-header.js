function getButton(name) {
  return document.getElementById(name);
}

const absoluteURL = window.location.pathname;
const pathArray = absoluteURL.split('/');
const targetIndex = pathArray.indexOf("ONG");

let newPath = "";
console.log(pathArray);
console.log(targetIndex);
if(targetIndex !== -1){
  for(let i=1; i<= pathArray.length-targetIndex-2; i++){
    newPath += "../";
  }
}else{
  const nrOfClimbs = pathArray.length - 2;
  for(let i =1; i<=nrOfClimbs; i++){
    newPath += "../";
  }
}
console.log(newPath);

const page = window.location.href.split('/')[3];
console.log(page);

let currentButton;
let pageList = ['about-us-page','project-page', 'donate-page', 'volunteer-page' ];
let buttonList = [getButton('about-us-button'), getButton('project-button'), getButton('donate-button'), getButton('volunteer-button')];

/*
for(let i=0; i<buttonList.length; i++){
  console.log(buttonList[i]);
}*/

for(let i=0; i<buttonList.length; i++){
  if(page != pageList[i]){
    buttonList[i].style.fontWeight = 300;
  }
  else{
    buttonList[i].style.fontWeight = 500;
  }
}

const tempDiv = document.querySelector('.master-header');
const anchorElements = tempDiv.querySelectorAll('a');

for(const anchor of anchorElements){
  const url = new URL(anchor.href, window.location.href);
  const relativePath = url.pathname.substring(1);

  anchor.href = newPath + relativePath;
}