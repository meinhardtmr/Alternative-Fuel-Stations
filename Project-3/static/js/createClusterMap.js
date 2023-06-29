//Create Cluster map when value = 'ALL'

function createClusterMap(value){
  logging ? console.log('createClusterMap: ', value) : null ;
  
  if(value == 'ALL'){
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

  L.geoJSON(stations).addTo(myMap);  
  }
  
  return;
}
