var financials = function (){
    var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var parseTime = d3.timeParse("%d-%b-%y");

    var x = d3.scaleTime()
        .rangeRound([0, width]);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    var line = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });

    d3.csv("csv/data3.csv", function(d) {
    d.date = parseTime(d.date);
    d.close = +d.close;
    return d;
    }, function(error, data) {
    if (error) throw error;

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.close; }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain");

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Subcribers (000)");

    g.append("path")
        .datum(data)
        .transition()
        .duration(250)
        .delay(250)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    });
}

var subscribers = function () {
    var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var colorScale = 
            d3.scaleLinear()
                .domain([0, height])
                .range(["green", "red"]);

    d3.csv("csv/data2.csv", function(d) {
    d.frequency = +d.frequency;
    return d;
    }, function(error, data) {
    if (error) throw error;

    x.domain(data.map(function(d) { return d.letter; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");

    var bars = g.selectAll(".bar")
                    .data(data)
                    .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function(d) { return x(d.letter); })
                    .attr("y", function(d) { return y(d.frequency); })
                    .attr("width", x.bandwidth());

    bars.transition()
            .duration(500)
            .delay(500)
            .attr("fill", function (d) { return colorScale(y(d.frequency)); })
            .attr("height", function(d) { return height - y(d.frequency); });
    });
}

var networks = function () {
     const data = [40, 50, 80];
  const r = 200;

  const color = d3.scaleOrdinal()
                    .range(["red", "yellow", "green"]);

  const canvas = 
      d3.select("svg");

  const group = 
      canvas.append("g")
        .attr("transform", "translate(450, 250)");

    const arc = d3.arc()
                    .innerRadius(100)
                    .outerRadius(r);

    const pie = d3.pie()
                    .value(d => d);

    const arcs = group.selectAll(".arc")
                    .data(pie(data))
                        .enter()
                        .append("g")
                        .attr("class", "arc");
    
    arcs.append("path")
            .attr("d", arc)
            .attr("fill", d => color(d.data));

    arcs.append("text")
        .attr("transform", d => "translate(" + arc.centroid(d) + ")")
        .attr("text-anchor", "middle")
        .attr("font-size", "1.5em")
        .text(d=> d.data);
}

financials();

document.querySelector(".but1nd").addEventListener("click", function(){
    var svg = document.querySelector("svg");
    svg.innerHTML = "";
    financials();
});

document.querySelector(".but2nd").addEventListener("click", function(){
    var svg = document.querySelector("svg");
    svg.innerHTML = "";
    subscribers();
});

document.querySelector(".but3nd").addEventListener("click", function(){
    var svg = document.querySelector("svg");
    svg.innerHTML = "";
    networks();
});