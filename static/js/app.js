let stations = [];
//let logging = false;
let logging = true;

const lat = 27.9;
const lon = -84;
const zoom = 6;

// Create initial map object
let myMap = L.map("map", {
        center: [lat, lon],
        zoom: zoom
      });

async function optionChanged(value){
  logging ? console.log('optionChanged: ', value) : null;

  //Create objects in parallel
  if(value == 'TEST'){
    await Promise.all([createLayerMap('ALL')]);   
  }
  else if(value == 'ALL'){
    await Promise.all([createClusterMap(value),
                       createGauge(value),
                       createHBarChart(value),
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
  let ele = document.getElementById('selDataset');
  ele.innerHTML = ele.innerHTML + '<option value="ALL">All</option>';
  for (i in stations) { 
    ele.innerHTML = ele.innerHTML + '<option value="' + stations[i].properties.id + '">' + stations[i].properties.id + '</option>';
    // Set break for development purposes. Comment out when testing.
    break;  
  }  
  
  return;
}

async function init(){
  console.log('init - start');
  await f1();
  console.log('init - end');

  // Uncomment code to test specific function  
  let value = 'ALL';
//  let value = 864;
  
  createLayerMap(value);   
  createClusterMap(value);
  createGauge(value);
  createHBarChart(value);   
  createSinglePointMap(value);
  createStationInfo(value);

  // This will render the page once intialization is complete
  // optionChanged('ALL')  
  
  return;
}

init();