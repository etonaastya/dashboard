
Morris.Bar({
    element: 'graph',
    // barColors:['#98B8CA', '#CD202C'],

    data: [
      {x: '96-ДВС', y: 102399},
      {x: '61-ПРИВ', y: 71671},
      {x: '17-МСК', y: 46334},
      {x: '58-ЮВСТ', y: 45153},
      {x: '24-ГОР', y: 43838},
      {x: '63-КБШ', y: 42853},
      {x: '28-СЕВ', y: 40409},
      {x: '51-СКВ', y: 39727},
      {x: '80-ЮУР', y: 38702},
      {x: '01-ОКТ', y: 37790},
      {x: '83-3СИБ', y: 34225},
      {x: '92-ВСИБ', y: 29992},
      {x: '76-СВРД', y: 28014},
      {x: '00-ГВЦ', y: 23125},
      {x: '94-ЗАБ', y: 20203},
      {x: '88-КРАСН', y: 17895},
      {x: '10-КЛГ', y: 7092}
    ],
    xkey: 'x',
    ykeys: ['y'],
    labels: ['Значение'],
    xLabelMargin: 0,
    barColors: function(row, series, type) {
      if (row.x === '63-КБШ' && row.y === 42853) {
        return '#638AA1'; // Красный цвет для колонки с координатой x
      } else {
        return '#98B8CA'; // Обычный цвет для остальных колонок
      }
    }
  });

  


  Morris.Bar({
    element: 'graph2',
    barColors:['#EDB1B5', '#EDB1B5'],

    data: [
      {x: '00-ГВЦ', y: 76},
      {x: '96-ДВС', y: 75},
      {x: '61-ПРИВ', y: 59},
      {x: '24-ГОР', y: 56},
      {x: '10-КЛГ', y: 48},
      {x: '58-ЮВСТ', y: 47},
      {x: '88-КРАСН', y: 37},
      {x: '28-СЕВ', y: 35},
      {x: '63-КБШ', y: 33},
      {x: '80-ЮУР', y: 28},
      {x: '51-СКВ', y: 26},
      {x: '92-ВСИБ', y: 24},
      {x: '01-ОКТ', y: 23},
      {x: '17-МСК', y: 23},
      {x: '83-3СИБ', y: 22},
      {x: '76-СВРД', y: 21},
      {x: '94-ЗАБ', y: 17}
    ],
    xkey: 'x',
    ykeys: ['y'],
    labels: ['Значение'],
    xLabelMargin: 0,
    yLabelFormat: function (y) { return y + '%' }
    
  });
  $('div svg text').css({
    "font-family" : "'Yanone Kaffeesatz'",
    "font-size": "15px"
  });
  

var barChartData = {
     labels: ["Свердловская ЖД", "Юго-Восточю ЖД", "Калининград. ЖД", "Юж.-Урал. ЖД", "Красноярская ЖД", "Куйбышевск. ЖД", "Приволжская ЖД","Сев.-Кавказ. ЖД","Северная ЖД","Горьковская ЖД", "Забайкальская. ЖД", "Запад.-Сибирск. ЖД", "Восточ.-Сибирск. ЖД", "Московская ЖД", "Дальневосточ. ЖД", "Октябрьская ЖД"],
    datasets: [{
        label: '2 квартал 2023г',
        backgroundColor: "rgba(54, 115, 151, 0.48)",
        data: [18.92,17.51,16.05,8.34,8.34,7.64,7.25,6.60,5.26,5.15,4.91,4.43,4.38,4.33,4.19,4.08],
        borderColor: 'rgba(91, 91, 91, 1)',
        borderWidth: 0.75
    }, 
     {
        type: 'line',
        label: 'Цель',
        data: [18.0,17.0,16.2,8.0,8.0,7.4,7.0,6.4,5.0,5.2,5.0,4.43,4.35,4.1,3.9,4.15],
        fill: false,
        backgroundColor: "rgba(205, 32, 44, 0.66)",
        tension: 0.4
      }, ]

};
var myBar = null;
window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            scales: {
              xAxes: [{
                  gridLines: {
                      drawOnChartArea: false
                  },
                  ticks: {
                    fontFamily: 'Yanone Kaffeesatz',
                    fontSize: 16
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
          }});
};


var data_two = {
  labels: ["Юго-Восточ.ЖД", "Калининград. ЖД", "Свердловская ЖД", "Красноярская ЖД", "Северная ЖД", "Приволжская ЖД", "Сев.-Кавказ. ЖД","Юж.-Урал. ЖД","Куйбышевск. ЖД","Дальневосточ. ЖД", "Забайкальская. ЖД", "Запад.-Сибирск. ЖД", "Горьковская. ЖД", "Октябрьская ЖД","Московская ЖД"],
 datasets: [{
     label: 'Охват',
     backgroundColor: "rgba(205, 32, 44, 0.45)",
     data: [34.97,29.44,28.88,18.13,17.32,16.81,16.81,16.77,16.55,16.40,16.27,15.53,14.75,13.09,12.9,11.23],
     borderColor: 'rgba(91, 91, 91, 1)',
     borderWidth: 0.75
 }, 
  {
     type: 'line',
     label: 'Цель',
     data: [17.0,25.0,25.0,15.0,16.0,16.0,16.2,14.6,14.55,15.20,15.05,15.0,15.3,12.0,8.5,8.35],
     fill: false,
     backgroundColor: "rgba(54, 115, 151, 1)",
     tension: 0.4
   }, ]

};
var myBar_2 = null;
var ctx2 = document.getElementById("canvas_2").getContext('2d');
myBar_2 = new Chart(ctx2, {
     type: 'bar',
     data: data_two,
     options: {
         responsive: true,
         scales: {
           xAxes: [{
               gridLines: {
                   drawOnChartArea: false
               }   ,
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
                 callback: function(value, index, values) {
                   return value + '%';
                 },
                 fontFamily: 'Yanone Kaffeesatz',
                 fontSize: 16
               }
           }]
       },
       }});
