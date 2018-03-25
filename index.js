/**
   Team FriendlyFed
   Tiffany Moi and Ibnul Jahan
   K14: You Are Smarter Than the President
   2018-03-26
 **/

//Data = [Revenue (Trillion), Spending (Trillion), Deficit (Hundreds of Billions), Deficit % of GDP, GDP (Trillion)]
var early_data = [2.6, 3.24, 6.37, 4.1, 15.5]; //2013 Obama
var late_data = [3.21, 3.65, 4.43, 2.6, 17]; //2017 Drumpf


var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var early_btn = document.getElementById("early");
var late_btn = document.getElementById("late");

var barUpdate = function(data){
    return bar.data(data);
};

var barEnter = function(update){
    return update.enter().append("div");
};

var barText = function(enter){
    enter.text(function(d){return d;});
};

var anim = function(enter){
    enter.transition().duration(5000).style("width", function(d) {
  return d * 20 + "px"; });
};

var clear = function(){
    while (chart.firstChild) {
        chart.removeChild(chart.firstChild);
    }
};

var display_early = function(){
    clear();
    var update = barUpdate(early_data);
    var enter = barEnter(update);
    barText(enter);
    anim(enter);
};

var display_late = function(){
    clear();
    var update = barUpdate(late_data);
    var enter = barEnter(update);
    barText(enter);
    anim(enter);
};

early_btn.addEventListener("click", display_early);
late_btn.addEventListener("click", display_late);
