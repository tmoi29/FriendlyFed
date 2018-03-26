/**
   Team FriendlyFed
   Tiffany Moi and Ibnul Jahan
   K14: You Are Smarter Than the President
   2018-03-26
 **/

//Data = [Revenue (Trillion), Spending (Trillion), Deficit (Hundreds of Billions), Deficit % of GDP, GDP (Trillion)]
var early_data = [2.6, 3.24, 6.37, 4.1, 15.5]; //2013 Obama
var late_data = [3.21, 3.65, 4.43, 2.6, 17]; //2017 Drumpf
var titles = ["Revenue (Trillion)", "Spending (Trillions)", "Deficit (Hundreds of Billions)", "Deficit % of GDP", "GDP (Trillions)"];

var early_title = "Obama Llama's Stats"
var late_title = "Duck Drumpf's Stats"


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

var barText = function(enter, titles){
    enter.text(function(d, i){return titles[i] + "  " + d;});
};

var anim = function(enter){
    enter.transition().duration(5000).style("width", function(d) {
  return d * 55 + "px"; });
};

var clear = function(){
    var c = document.getElementsByClassName("chart");
    c = c[0];
    document.getElementsByTagName("h2")[0].innerHTML = "";
    while (c.firstChild) {
        c.removeChild(c.firstChild);
    }
};

var display_early = function(){
    clear();
    var update = barUpdate(early_data);
    var enter = barEnter(update);
    barText(enter, titles);
    anim(enter);
    document.getElementsByTagName("h2")[0].innerHTML = early_title;
};

var display_late = function(){
    clear();
    var update = barUpdate(late_data);
    var enter = barEnter(update);
    barText(enter, titles);
    anim(enter);
    document.getElementsByTagName("h2")[0].innerHTML = late_title;
};

early_btn.addEventListener("click", display_early);
late_btn.addEventListener("click", display_late);
