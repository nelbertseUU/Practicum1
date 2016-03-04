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