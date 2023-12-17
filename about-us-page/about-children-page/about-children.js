//let bars;

const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("bar-animation");
      entry.target.style.height = getComputedStyle(entry.target).getPropertyValue("--bar-height");
    }
  });
}, {threshold: 1} );

document.addEventListener("DOMContentLoaded", function() {
  const data = [204, 168, 204, 243]; // Example data for the bars
  const container = document.getElementById("chart-container");
  const scaleContainer = document.getElementById("scale-container");

  console.log("creating bars")
  // Create bars
  data.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = "0";
    bar.style.setProperty("--bar-height", value + "px"); // Set individual bar height
    container.appendChild(bar);
    observer.observe(bar);
  });
});
