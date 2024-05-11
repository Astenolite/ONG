

const barObserver = new IntersectionObserver(entries =>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("bar-animation");
      entry.target.style.height = getComputedStyle(entry.target).getPropertyValue("--bar-height");
    }
  });
}, {threshold: 1} );

const pieChartObserver = new IntersectionObserver(entries =>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const pieSlices = Array.from(entry.target.getElementsByClassName("pie-slice"));
      pieSlices.forEach((value, index) => {
        console.log('Element is intersecting. Adding class...');
        value.classList.add("pie-animation");
      });
      //
    }
  });
}, {threshold: 1});


function createPieSlice(percentage, color){
  const pieSlice = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  pieSlice.setAttribute('cx', '30');
  pieSlice.setAttribute('cy', '30');
  pieSlice.setAttribute('r', '15.9');
  pieSlice.classList.add("pie-slice");
  pieSlice.style.setProperty("--percentage", percentage + "px");
  pieSlice.style.stroke = color;
  pieSlice.innerHTML = "hello";
  return pieSlice;
}

document.addEventListener("DOMContentLoaded", function() {
  const data = [204, 168, 204, 243]; // Example data for the bars
  const container = document.getElementById("chart-container");

  const pieChartContainer = Array.from(document.getElementsByClassName("svg-canvas-pie-chart"));
  const pieChartValues = [
    [15.6],
    [40.8],
    [47],
    [43.9]
  ]; // insert values for each pie chart

  const pieChartColors = [
    ['#545691'],
    ['#545691'],
    ['#545691'],
    ['#545691']
  ]; // insert colors for each pie chart
  
  pieChartContainer.forEach((value, index) => {

    value.appendChild(createPieSlice(100, '#c7d4d2'));
    console.log(value.parentElement);
    //;

    for(let i=0; i < pieChartValues[index].length; i++){   
      value.appendChild(createPieSlice(pieChartValues[index][i], pieChartColors[index][i]));
    }

    pieChartObserver.observe(value.parentElement);
  });

  data.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = "0";
    bar.style.setProperty("--bar-height", value + "px"); // Set individual bar height
    container.appendChild(bar);
    barObserver.observe(bar);
  });
});
