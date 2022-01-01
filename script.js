//use moment.js to display day in header p tag with class lead, id currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//create 9 time block divs using bootstrap to give three columns. one for time of day,
//which will always be the same, one for the form and one for the save buttons. save
//div contents to local storage.

//at the beginning of every day (midnight), change class to future color (green) 
//background and listen for the hour to pass before giving past present or future colors

//as each hour passes, update the color of the time blocks

