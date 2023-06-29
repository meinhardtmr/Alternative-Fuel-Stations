// This chart will need logic for 'ALL' points and single points

function createHBarChart(value){
  logging ? console.log('createHBarChart: ', value) : null ;
  
  let trace1 = {
    x: [5,4,3,2,1].reverse(),
    y: ['ELEC','E85','LPG','CNG','LNG'].reverse(),
    type: 'bar',
    orientation: 'h',
    text: ['ELEC','E85','LPG','CNG','LNG']
  };
  
  let layout = {
    title: '<b>Fuel Type</b>'
  }

  Plotly.newPlot("bar", [trace1], layout);

  return;
}
