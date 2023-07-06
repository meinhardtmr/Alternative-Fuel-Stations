//Create Cluster map when value = 'ALL'
function createClusterMap(value){

  if(value == 'ALL'){
    logging ? console.log('createClusterMap: ', value) : null ;
  
    function onEachFeature(feature, layer) {
      layer.on('mouseover', function(){layer.bindPopup(`${feature.properties.id}`).openPopup()});
      layer.on('click', function(){
                           ele.innerHTML = ele.innerHTML + '<option value="' + feature.properties.id + '">' + feature.properties.id + '</option>';
                           ele.value = feature.properties.id;
                           ele.onchange();})
    }

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
  
    L.geoJSON(stations, {onEachFeature: onEachFeature}).addTo(myMap);  
  }
  
  return;
}
