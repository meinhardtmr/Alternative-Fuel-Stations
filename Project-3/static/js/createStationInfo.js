// Populate Station Info when value is not 'ALL', and remove Info when value is 'ALL'

function createStationInfo(value){
  if (value == 'ALL'){
    logging ? console.log('createStationInfo: ALL') : null;
    document.getElementById("stations-metadata").innerHTML = ''; 
  } else{    
    logging ? console.log('createStationInfo: ', value, stations.find(o => o.properties.id == value).properties.id) : null;
  
    let str = `<p class="p1">Station ID: ${stations.find(o => o.properties.id == value).properties.id}</p>
               <p class="p1">Station Name: ${stations.find(o => o.properties.id == value).properties.station_name}</p>
               <p class="p1">Street Address: ${stations.find(o => o.properties.id == value).properties.street_address}</p>
               <p class="p1">City: ${stations.find(o => o.properties.id == value).properties.city}</p>
               <p class="p1">State: ${stations.find(o => o.properties.id == value).properties.state}</p>
               <p class="p1">Zip Code: ${stations.find(o => o.properties.id == value).properties.zip}</p>
               <p class="p1">Phone Number: ${stations.find(o => o.properties.id == value).properties.station_phone}</p>
               <p class="p1">Fuel Type: ${stations.find(o => o.properties.id == value).properties.fuel_type_desc}</p>`;
    
    document.getElementById("stations-metadata").innerHTML = str; 
  }
  return;
}
