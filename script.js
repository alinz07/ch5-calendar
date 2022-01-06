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

//div contents to local storage. empty local storage each day
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

//at the beginning of every day (midnight), change class to future color (green) 
//background and listen for the hour to pass before giving past present or future colors
var changeDay = function(event) {
    //empty .task divs
    //save empty .task divs to local storage
}
//as each hour passes, update the color of the time blocks

//create event listener hopefully with moment, so when the day changes, changeDay executes

//create event listener to edit .task div when you click on the .task-form form
$(".saveBtn").on("click", saveTasks);

loadTasks();