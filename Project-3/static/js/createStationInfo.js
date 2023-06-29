// Populate Station Info when value is not 'ALL', and remove Info when value is 'ALL'

function createStationInfo(value){
  if (value == 'ALL'){
    logging ? console.log('createStationInfo: ALL') : null;
    document.getElementById("stations-metadata").innerHTML = ''; 
  } else{    
    logging ? console.log('createStationInfo: ', value, stations.find(o => o.properties.id == value).properties.id) : null;
  
    let str = `<p>id: ${stations.find(o => o.properties.id == value).properties.id}</p>
              <p>Station Name: ${stations.find(o => o.properties.id == value).properties.station_name}</p>`;
            //<p>gender: ${samples.find(o => o.properties.id == value).gender}</p>
            //<p>age: ${samples.find(o => o.properties.id == value).age}</p>
            //<p>location: ${samples.find(o => o.properties.id == value).location}</p>
            //<p>bbtype: ${samples.find(o => o.properties.id == value).bbtype}</p>
            //<p>wfreq: ${samples.find(o => o.properties.id == value).wfreq}</p>`;
    
    document.getElementById("stations-metadata").innerHTML = str; 
  }
  return;
}
