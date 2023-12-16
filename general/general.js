document.addEventListener("DOMContentLoaded", function() {
  const xhttp = new XMLHttpRequest();

  const absoluteURL = window.location.pathname;
  const pathArray = absoluteURL.split('/');
  const targetIndex = pathArray.indexOf("ONG");
  console.log(pathArray);
  console.log(targetIndex);


  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("masterHeader").innerHTML = xhttp.responseText;

      const script = document.createElement("script");
      script.src = "/general/master-header/master-header.js";
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/general/master-header/header.css";
      document.body.appendChild(link);
    }
  };

  xhttp.open("GET", "general/master-header/master-header.html", true);
  xhttp.send();
});