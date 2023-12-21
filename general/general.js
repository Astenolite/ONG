window.getRelativePath = function (){
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
  return {newPath, page};
}



document.addEventListener("DOMContentLoaded", function() {
  insertRoboto();
  
  const pathToMasterHeader = "general/master-header/";
  const pathToMasterFooter = "general/master-footer/";


/*
  const absoluteURL = window.location.pathname;
  const pathArray = absoluteURL.split('/');
  const targetIndex = pathArray.indexOf("ONG");
  let newPath = "";

  if(targetIndex !== -1)
    for(let i = 1; i <= pathArray.length - targetIndex - 2; i++)
      newPath += "../";
  else{
    const nrOfClimbs = pathArray.length - 2;
    for(let i = 1; i <= nrOfClimbs; i++)
      newPath += "../";
  }
  
  console.log("general.js: ", newPath);
  */
  let newPathMasterHeader = window.getRelativePath().newPath + pathToMasterHeader;
  let newPathMasterFooter = window.getRelativePath().newPath + pathToMasterFooter;
  const xhttp = new XMLHttpRequest(); //creates an XMLH element to get the gile requested

  xhttp.open("GET", newPathMasterHeader + "master-header.html", true); // Gets the file requested
  console.log(xhttp.responseText);
  xhttp.send(); //Sends the file requested

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 /*when the file is delivered*/ && this.status == 200) {

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = xhttp.responseText;

      const imgElement = tempDiv.querySelector("#logo");
      if (imgElement) {
        imgElement.src = newPathMasterHeader + "LOGO Andra.svg";
      } else {
        console.log("Image element not found.");
      }
      document.getElementById("masterHeader").innerHTML = tempDiv.innerHTML;

      const script = document.createElement("script");
      script.src = newPathMasterHeader + "master-header.js";
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = newPathMasterHeader + "header.css";
      document.body.appendChild(link);

      console.log("master header has been fetched");
    }
  };

  


  const xhttp_MasterFooter = new XMLHttpRequest();
  xhttp_MasterFooter.open("GET", newPathMasterFooter + "master-footer.html", true);
  console.log(xhttp.responseText);
  xhttp_MasterFooter.send();

  xhttp_MasterFooter.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      const tempDiv = document.createElement("div");
      
      tempDiv.innerHTML = xhttp_MasterFooter.responseText;
      document.getElementById("masterFooter").innerHTML = tempDiv.innerHTML;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = newPathMasterFooter + "master-footer.css";
      document.body.appendChild(link);

      const script = document.createElement("script");
      script.src = newPathMasterFooter + "master-footer.js";
      document.body.appendChild(script);

    }
  };
  
insertRoboto();
});

/*
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,300;1,500&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
*/

function insertRoboto(){
  const link1 = document.createElement("link");
  link1.rel = "preconnect";
  link1.href = "https://fonts.googleapis.com";
  document.body.appendChild(link1);

  const link2 = document.createElement("link");
  link2.rel = "preconnect";
  link2.href = "https://fonts.gstatic.com";
  link2.crossOrigin="";
  document.body.appendChild(link2);

  const link3 = document.createElement("link");
  link3.rel = "stylesheet";
  link3.href = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,300;1,500&amp;display=swap";
  document.body.appendChild(link3);

  const link4 = document.createElement("link");
  link4.rel = "stylesheet";
  link4.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  document.body.appendChild(link4);
}