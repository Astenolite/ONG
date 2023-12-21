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

console.log(10);