document.addEventListener("DOMContentLoaded", function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("masterHeader").innerHTML = xhttp.responseText;
      const script = document.createElement("script");
      script.src = "/general/master-header/master-header.js";
      document.body.appendChild(script);
    }
  };
  xhttp.open("GET", "/general/master-header/master-header.html", true);
  xhttp.send();
});