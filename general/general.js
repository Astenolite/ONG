document.addEventListener("DOMContentLoaded", function() {
  const absoluteURL = window.location.pathname;
  const pathArray = absoluteURL.split('/');
  const targetIndex = pathArray.indexOf("ONG");
  const pathToMasterHeader = "general/master-header/";
  const pathToMasterFooter = "general/master-footer/";
  let newPath = "";

  if(targetIndex !== -1)
    for(let i = 1; i <= pathArray.length - targetIndex - 2; i++)
      newPath += "../";
  else{
    const nrOfClimbs = pathArray.length - 2;
    for(let i = 1; i <= nrOfClimbs; i++)
      newPath += "../";
  }
  let newPathMasterHeader = newPath + pathToMasterHeader;
  let newPathMasterFooter = newPath + pathToMasterFooter;

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
      script.src = newPathMasterHeader + "master-footer.js";
      document.body.appendChild(script);

      /*
      const imgElement = tempDiv.querySelector("#logo");
      if (imgElement) {
        imgElement.src = newPathMasterHeader + "LOGO Andra.svg";
      } else {
        console.log("Image element not found.");
      }
      
      */

      /*
      

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = newPathMasterHeader + "header.css";
      document.body.appendChild(link);
      */

    }
  };
  

});