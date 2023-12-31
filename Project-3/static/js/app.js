let stations = [];
//let logging = false;
let logging = true;
const ele = document.getElementById('selDataset');
const lat = 27.9;
const lon = -84;
const zoom = 6;

let input = document.getElementById("search");
search.addEventListener("keypress", function(event) {
  //If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      //Trigger the button element with a click
      zbutton.click();
  }
});

// Create initial cluster map object
let map = L.map("myMap", {
        center: [lat, lon],
        zoom: zoom
      });

// Create initial single point map object
let spMap = L.map("sp-map", {
        center: [lat, lon],
        zoom: zoom
      });

async function optionChanged(value){
  logging ? console.log('optionChanged: ', value) : null;

  //Create objects in parallel
  if(value == 'ALL'){
    ele.innerHTML = '<option value="ALL">All</option>';
    await Promise.all([createClusterMap(value),
                       createGauge(value),
                       createHBarChart(value),
                       createSinglePointMap(value),
                       createStationInfo(value)]);   
  }
  else{
    await Promise.all([createGauge(value),
                       createHBarChart(value),
                       createSinglePointMap(value),
                       createStationInfo(value)]);
  }
  
  return;
}
 
async function f1(){
const jsonURL = 'http://localhost:5000/api/v1.0/stations';

  // Call app.py API and populate stations array
  const res = await fetch(jsonURL);
  stations = await res.json();
  console.log('Stations: ', stations)
 
  // Populate Stations ID dropdown
  ele.innerHTML = '<option value="ALL">All</option>';
  
  return;
}

async function init(){
  console.log('init - start');
  await f1();
  console.log('init - end');

  // This will render the page once intialization is complete
  optionChanged('ALL');  
  
  return;
}

init();