document.addEventListener("DOMContentLoaded", function() {

  const xhttp = new XMLHttpRequest();

  const absoluteURL = window.location.pathname;
  const pathArray = absoluteURL.split('/');
  const targetIndex = pathArray.indexOf("ONG");
  const pathToFolder = "general/master-header/";
  let newPath = "";
  // console.log(pathArray);
  //console.log(targetIndex);
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
  newPath += pathToFolder;
  //console.log(newPath);


  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("masterHeader").innerHTML = xhttp.responseText;


      //console.log(xhttp.responseText);

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = xhttp.responseText;

      const imgElement = tempDiv.querySelector("#logo");
      if (imgElement) {
        imgElement.src = newPath + "LOGO Andra.svg";
      } else {
        console.log("Image element not found.");
      }
      document.getElementById("masterHeader").innerHTML = tempDiv.innerHTML;

      const script = document.createElement("script");
      script.src = newPath + "master-header.js";
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = newPath + "header.css";
      document.body.appendChild(link);
    }
  };

  
  xhttp.open("GET", newPath + "master-header.html", true);
  console.log(xhttp.responseText);

  xhttp.send();
});