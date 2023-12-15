function getButton(name) {
  return document.getElementById(name);
}

const page = window.location.href.split('/')[3];
console.log(page);

let currentButton;
let pageList = ['about-us-page','project-page', 'donate-page', 'volunteer-page' ];
let buttonList = [getButton('about-us-button'), getButton('project-button'), getButton('donate-button'), getButton('volunteer-button')];

for(let i=0; i<buttonList.length; i++){
  console.log(buttonList[i]);
}

for(let i=0; i<buttonList.length; i++){
  if(page != pageList[i]){
    buttonList[i].style.fontWeight = 300;
  }
  else{
    buttonList[i].style.fontWeight = 500;
  }
    
}