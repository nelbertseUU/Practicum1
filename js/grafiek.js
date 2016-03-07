//hier voer je arrays van data in
    var data = [ { label: "Percentage internetgebruikers in America", data: [								
[2005,35.9],
[2006,38.8],
[2007,42.7],
[2008,44.1],
[2009,46.1],
[2010,50.5],
[2011,54.8],
[2012,58.1],
[2013,61.8],
[2014,65.5]
]},
                { label: "Percentage internetgebruikers in Afrika", data: [								
[2005,2.4],
[2006,3.3],
[2007,3.9],
[2008,5.9],
[2009,7.3],
[2010,9.8],
[2011,12.6],
[2012,14.6],
[2013,16.8],
[2014,19.0]
]},
                  { label: "Percentage internetgebruikers in Azie", data: [								
[2005,9.4],
[2006,10.6],
[2007,13.4],
[2008,16.2],
[2009,18.9],
[2010,22.5],
[2011,25.2],
[2012,28.1],
[2013,30.1],
[2014,32.4]
]},
  { label: "Percentage internetgebruikers in Europa", data: [								
[2005,46.3],
[2006,49.7],
[2007,56.0],
[2008,60.2],
[2009,63.2],
[2010,66.6],
[2011,69.2],
[2012,71.4],
[2013,73.1],
[2014,74.8]
] }
];
    var options = {
       
    series: {//en hier opties, er zijn een heleboel mogelijkheden
        lines: { show: true },
        points: { show: true }
    }
};
    $.plot($("#grafiek1"), data, options);//uiteindelijk laat je hem ip deze manier zien.