//create task array to save tasks to local storage
var taskArray = [];

//use moment.js to display day in header p tag with class lead, id currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//create function to load tasks saved in local storage. Off the top of me head I think
//it will involve iterating and parsing through an array, then appending to the 
//element with the i id.
var loadTasks = function() {

    taskArray = JSON.parse(localStorage.getItem("tasks"));
    
    //if nothing in local storage, end function, nothing to load
    if (!taskArray) {
        return;
    }
    else {
        //update each input el with the taskArray info from local storage
        for (var i = 0; i<9; i++) {
            var className = ".hour-" + (9+i);
            var taskSection = "section" + className;
            var inputEl = $(taskSection).find(".task-input");
            var inputText = taskArray[i].text;
            inputEl.val(inputText);
        }
    }
}

//save contents to array object
var saveTasks = function(event) {

    taskArray=[];

    for (var i = 0; i<9; i++) {
        var className = ".hour-" + (9+i);
        var taskSection = "section" + className;
        var taskInput = $(taskSection).find(".task-input");
        const taskObj = {
            taskId: i+9,
            text: taskInput.val(),
        }
        taskArray.push(taskObj);
    }

    localStorage.setItem("tasks", JSON.stringify(taskArray));
}

//empty local storage each day
//at the beginning of every day (midnight), empty local storage, change class to future color (green) 
//background and listen for the hour to pass before giving past present or future colors
var changeDay = function(event) {
    
    for (var i = 0; i<9; i++) {
        var className = ".hour-" + (9+i);
        var taskSection = "section" + className;
        var inputEl = $(taskSection).find(".task-input");
        inputEl.val("");
    }

    //save empty .task divs to local storage and load empty inputs
    saveTasks();
    loadTasks();

    var taskInputEl=$(".task-input");
    taskInputEl.addClass("future");
}



//as each hour passes, update the color of the time blocks
var setTimeCheck = function() {

    var zeroMinute = 0;

    //get minute of now
    var now = moment().minute();

    //get difference in minutes of now vs 00 minutes
    var minuteDiff = now - zeroMinute;
    var milliDiff = minuteDiff * 60000;
    var minToHour = 3600000 - milliDiff;
    console.log(minToHour);

    //set a delay to run the hourCheck function in the difference of minutes
    setTimeout(hourCheck, minToHour);
}

//if browser is left open, the colors will update hourly
var hourCheck = function() {

    //need to check that this function is called as intended
    console.log("running");

    //check if the hour is midnight
    var hourNum = moment().hour();
    console.log(hourNum);

    if (hourNum==0) {
        changeDay();
    }
    else {
        console.log("not midnight");
        assignTimeColors(hourNum);
    };

    setInterval(assignTimeColors, 3600000);
}

var assignTimeColors = function (hourNum) {

    var hourNum = moment().hour();

    for (var i = 0; i<9; i++) {
        var className = ".hour-" + (9+i);
        var taskSection = "section" + className;
        var inputEl = $(taskSection).find(".task-input");

        if (hourNum > (9+i)) {
            inputEl.removeClass("past present future");
            inputEl.addClass("past");
        }
        else if (hourNum == (9+i)) {
            inputEl.removeClass("past present future");
            inputEl.addClass("present");
        }
        else if (hourNum < (9+i)) {
            inputEl.removeClass("past present future");
            inputEl.addClass("future");
        }
    }
};

//create event listener to edit .task div when you click on the .task-form form
$(".saveBtn").on("click", saveTasks);

loadTasks();

var rightNour=moment().hour();
assignTimeColors(rightNour);

setTimeCheck();