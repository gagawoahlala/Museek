$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);

  var myStorage = window.localStorage;
  // myStorage.setItem('chapter', 0);
  var data = JSON.parse(myStorage.getItem('stat'));
  // console.log(JSON.parse(data));


  var svg = d3.select("svg"),
      margin = {top: 20, right: 20, bottom: 80, left: 50},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleTime()
      .rangeRound([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  var parseTime = d3.timeParse("%d-%b-%y");

  var xAxis = d3.axisBottom()
      .scale(x)
      .ticks(5);

  var yAxis = d3.axisLeft()
      .scale(y)
      .ticks(5);

  var valueline = d3.line()
      .x(function (d) {
          return x(parseTime(d.date));
      })
      .y(function (d) {
          return y(d.score);
      });

  // Scale the range of the data
  x.domain(d3.extent(data,
      function (d) {
          return parseTime(d.date);
      }));
  y.domain([
      0, d3.max(data,
          function (d) {
              return d.score;
          })
  ]);

  svg.append("path") // Add the valueline path.
      .attr("d", valueline(data));

  svg.append("g") // Add the X Axis
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis).select(".domain")
        .remove();

  svg.append("g") // Add the Y Axis
      .attr("class", "y axis")
      .call(yAxis).append("text")
        .attr("fill", "#000")
        // .attr("transform", "rotate(-90)")
        .attr("x", 80)
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("XP earned");

  svg.selectAll(".x.axis text")  // select all the text elements for the xaxis
   .attr("transform", function(d) {
       return "translate(" + this.getBBox().height*-0.5 + "," + this.getBBox().height + ")rotate(-60)";
 });

})
