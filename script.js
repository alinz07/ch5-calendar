//create task array to save tasks to local storage
var taskArray = [];

//use moment.js to display day in header p tag with class lead, id currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//create function to load tasks saved in local storage. Off the top of me head I think
//it will involved iterating and parsing through an array, then appending to the 
//element with the i id.
var loadTasks

//div contents to local storage. empty local storage each day
//save contents to array object
var saveTasks = function() {

    for (var i = 0; i<9; i++) {
        className = ".hour-" + (9+i);
        taskSection = "section" + className;
        taskDiv = $(taskSection).find(".task");
        taskDiv.attr("taskId", i);
        console.log(taskDiv.attr("taskId"));
        taskText = $(taskDiv).text();
        taskArray.push(taskText);
    }

    localStorage.setItem("tasks", taskArray);
}

//at the beginning of every day (midnight), change class to future color (green) 
//background and listen for the hour to pass before giving past present or future colors
var changeDay = function(event) {
    //empty .task divs
    //save empty .task divs to local storage
}
//as each hour passes, update the color of the time blocks

//create event listener hopefully with moment, so when the day changes, changeDay executes

saveTasks();