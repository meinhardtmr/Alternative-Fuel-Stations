// This chart will not plot for 'ALL' but will plot a single point when the dropdown is selected

function createSinglePointMap(value){
  logging ? console.log('createSinglePointMap: ', value) : null ;
  
  //let lat = 28.5384;
  //let lon = -81.3789;
  
  // Remove current map. This is needed for selecting new Station ID's
  spMap.remove();

  spMap = L.map("sp-map", {
      center: [lat, lon],
      zoom: zoom
    });

  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(spMap);

console.log('Sp-map', stations.find(o => o.properties.id == value));

  if(value != 'ALL'){
    //const lat = stations.find(o => o.properties.id == value).geometry.coordinates[1];
    //const lon = stations.find(o => o.properties.id == value).geometry.coordinates[0];
    //const marker = new L.marker([lat, lon]).on('mouseover', markerMouseOver);

    //function markerMouseOver(e){
      //e.target.bindPopup(marker.station_name).openPopup();
    //  e.target.bindPopup(feature.properties.id).openPopup();
    //};
 
    // Add marker to map
    //marker.station_name = stations.find(o => o.properties.id == value).properties.station_name;
    //marker.addTo(spMap);
//    L.geoJSON(stations.find(o => o.properties.id == value), 
//       {onEachFeature : function (feature, layer)
//          {label = feature.properties.station_name;}}).addTo(spMap).bindTooltip(label).openTooltip();  

  }
  
  return;
}
