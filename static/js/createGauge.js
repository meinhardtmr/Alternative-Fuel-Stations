function createGauge(value){
  logging ? console.log('createGaugeChart: ', value) : null;
  
  let trace1 = {
    type: 'pie',
    showlegend: false,
    rotation: 90,
    hole: 0.5,
    values: [100/9, 100/9, 100/9, 100/9, 100/9, 100/9, 100/9, 100/9, 100/9, 100 ],
    text: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", ""],
    direction: "clockwise",
    textinfo: "text",
    textposition: "inside",
    hoverinfo: "none",
    marker: {colors:["rgba(225,223,181,0.3", 
                     "rgba(225,223,181,0.5)", 
                     "rgba(225,223,181,0.7)", 
                     "rgba(196,209,120,0.5)", 
                     "rgba(196,232,113,0.5)", 
                     "rgba(149,168,74,0.6)", 
                     "rgba(74,151,23,0.5)", 
                     "rgba(74,151,23,0.7)", 
                     "rgba(74,151,23,0.8)", 
                     "rgba(255,255,255,0"]}
  };
  
  //radius is the length of the dial
  let radius = .15;
  
  //n is the number of units
  //Needs logic to find number of units
  //let n = stations.find(o => o.id == value).properties.??;
  let n = 9;
  
  //theta is the angle in radians where 3.14159 is the equivalent of 180' 
  //as n approaches 9 theta approaches 0
  let theta = 3.14159 - (3.14159 * (n/9));

  let layout = {
    title: '<b>Number of pumps/outlets</b>',
    shapes: [{type: "line",
              x0: .5,
              y0: .5,
              x1: .5 + (radius * Math.cos(theta)),
              y1: .5 + (radius * Math.sin(theta)),
              line: {color: "red",
                      width: 3}
            }]                           
  }
  Plotly.newPlot("gauge", [trace1], layout);

  return;
}


