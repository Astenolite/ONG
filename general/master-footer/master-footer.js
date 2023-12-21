function getButton(name) {
  return document.getElementById(name);
}

const absoluteURL = window.location.pathname;
const pathArray = absoluteURL.split('/');
const targetIndex = pathArray.indexOf("ONG");

let newPath = "", page = "";


if(targetIndex !== -1){
  for(let i=1; i<= pathArray.length-targetIndex-2; i++){
    newPath += "../";
  }
  page = pathArray[targetIndex + 1];
}else{
  const nrOfClimbs = pathArray.length - 2;
  for(let i =1; i<=nrOfClimbs; i++){
    newPath += "../";
  }
  page = pathArray[1];
}

const tempDiv = document.querySelector('.master-footer');
const anchorElements = tempDiv.querySelectorAll('a');

for(const anchor of anchorElements){
  const url = new URL(anchor.href, window.location.href);
  const relativePath = url.pathname.substring(1);

  anchor.href = newPath + relativePath;
}