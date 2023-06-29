// This chart will not plot for 'ALL' but will plot a single point when the dropdown is selected

function createSinglePointMap(value){
  logging ? console.log('createSinglePointMap: ', value) : null ;
  
  if(value != 'ALL'){
    // Remove current map. This is needed for selecting new Station ID's
    myMap.remove();

    myMap = L.map("map", {
        center: [lat, lon],
        zoom: zoom
      });

    // Adding the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(myMap);

  }
  
  return;
}
