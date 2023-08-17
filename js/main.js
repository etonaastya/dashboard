var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
    data: {
      labels: ['ОКС', 'КСУП', 'ПИК','УПП'],
      
      datasets: [
        {
          data: [17.15, 8.15, 3.54, 1.91],
          backgroundColor: '#E3848B',
          label: '%  на 22.06.2023',
          borderWidth: 1,
         borderRadius: 25,
         borderSkipped: false,
        },
        {
          data: [18.08, 7.98, 4.59, 2.03],
          backgroundColor: '#8EB1C5',
          label: '% на 29.06.2023',
          borderWidth: 1,
         borderRadius: 25,
         borderSkipped: false,
          
        }
        
      ]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }   ,
            ticks: { callback: function(value, index, values) {
              return value + '%';
            },
              fontFamily: 'Yanone Kaffeesatz',
              fontSize: 16,
              
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
             
              fontFamily: 'Yanone Kaffeesatz',
              fontSize: 16
            }
        }]
    },
    }
});

var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'horizontalBar',
  data: {
    labels: ['УПП-ИВЦ-КБШ', 'ПИК-ИВЦ-КБШ', 'ОКС-ИВЦ-КБШ', 'КСУП-ИВЦ-КБШ'],
    datasets: [
      {
        data: [8279, 7234, 6847, 493],
        backgroundColor: '#367397',
        label: 'Выполнено объектов'
      },
      {
        data: [6546, 4713, 6815, 322],
        backgroundColor: '#A7C1D1',
        label: 'Кол-во объектов с маркировкой'
      }
    ]
  },
    options: {
      scales: {
          xAxes: [{
              gridLines: {
                  drawOnChartArea: false
              },
              ticks: {
                fontFamily: 'Yanone Kaffeesatz',
                fontSize: 16,
                
              }            
          }],
          yAxes: [{
              gridLines: {
                  drawOnChartArea: false
              },
              ticks: {
                fontFamily: 'Yanone Kaffeesatz',
                fontSize: 16,
                
              }
          }]
      }
  }
});
var ctx3 = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx3, {
  type: 'horizontalBar',
  data: {
    labels: ['УПП-ИВЦ-КБШ', 'ПИК-ИВЦ-КБШ', 'ОКС-ИВЦ-КБШ', 'КСУП-ИВЦ-КБШ'],
    datasets: [
      {
        data: [5151, 2277, 712, 386],
        backgroundColor: '#CD202C',
        label: 'Выполнено объектов'
      },
      {
        data: [3767, 1068, 708, 238],
        backgroundColor: '#F5959C',
        label: 'Кол-во объектов с маркировкой'
      }
    ]
  },
    options: {
      scales: {
          xAxes: [{
              gridLines: {
                  drawOnChartArea: false
              },
              ticks: {
                fontFamily: 'Yanone Kaffeesatz',
                fontSize: 16,
                
              }
          }],
          yAxes: [{
              gridLines: {
                  drawOnChartArea: false
              },
              ticks: {
                fontFamily: 'Yanone Kaffeesatz',
                fontSize: 16,
                
              }
          }]
      }
  }
});
if(name=="Research"){
  var columnTemplate =     series.columns.template;
 columnTemplate.minX = 20; 
 }
 

createSeries("taux", "#4985DF","10", "Research");
createSeries("taux_max","#F1F9FE","9",  "Final");

chart.exporting.menu = new am4core.ExportMenu();
chart.exporting.menu.align = "right";
chart.exporting.menu.verticalAlign = "top";
chart.exporting.menu.items = [{
  "label": "...",
  "menu": [
    { "type": "png", "label": "PNG" },
    { "type": "json", "label": "JSON" },
    { "label": "SCREEN", "type": "print" },
              { "type": "json", "label": "JSON" },
          { "type": "csv", "label": "CSV" },
          { "type": "xlsx", "label": "XLSX" },
          { "type": "html", "label": "HTML" },
          { "type": "pdfdata", "label": "PDF" }
  ]
}];

chart.exporting.menu.items[0].icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMUU0MjkyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4yOTMgMi43NTRhLjc1Ljc1IDAgMTAtMS41LS4wMDhMMTAuNzI5IDE1LjJsLS40MjktLjQzNmEuNzUuNzUgMCAxMC0xLjA3IDEuMDUybDEuNzk5IDEuODI5YS43NDguNzQ4IDAgMDAxLjA2NS4wMDRsMS45NC0xLjk0YS43NS43NSAwIDAwLTEuMDYtMS4wNmwtLjc1Mi43NWEuNzYuNzYgMCAwMC4wMDctLjA5M2wuMDY0LTEyLjU1MnptLS43MTcgMTMuMjkybC0uMDA4LjAwOC0uMDA2LS4wMDYuMDE0LS4wMDJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjMUU0MjkyIiBkPSJNMS41IDEyLjIyOGEuNzUuNzUgMCAwMC0xLjUgMHY3LjY5M2MwIC44OC42NTMgMS42MjIgMS41MjUgMS43MzZsLjcyNy4wOTRjNi4zMDUuODE5IDEyLjY5LjgxOSAxOC45OTYgMGwuNzI3LS4wOTVhMS43NSAxLjc1IDAgMDAxLjUyNS0xLjczNXYtNy42OTNhLjc1Ljc1IDAgMDAtMS41IDB2Ny42OTNhLjI1LjI1IDAgMDEtLjIxOC4yNDhsLS43MjcuMDk0YTcyLjI0NiA3Mi4yNDYgMCAwMS0xOC42MSAwbC0uNzI3LS4wOTRhLjI1LjI1IDAgMDEtLjIxOC0uMjQ4di03LjY5M3oiLz4KPC9zdmc+Cg==";
