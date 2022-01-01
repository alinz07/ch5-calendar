//use moment.js to display day in header p tag with class lead, id currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//div contents to local storage. empty local storage each day

//at the beginning of every day (midnight), change class to future color (green) 
//background and listen for the hour to pass before giving past present or future colors
var changeDay = function(event) {
    //empty .task divs
    //save empty .task divs to local storage
}
//as each hour passes, update the color of the time blocks

//create event listener hopefully with moment, so when the day changes, changeDay executes