document.addEventListener("DOMContentLoaded", function() {
  const data = [204, 168, 204, 243]; // Example data for the bars
  const container = document.getElementById("chart-container");
  const scaleContainer = document.getElementById("scale-container");

  console.log("creating bars")
  // Create bars
  data.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = value + "px";
    container.appendChild(bar);
  });
});