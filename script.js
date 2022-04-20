let todos = document.getElementById("todo-container");

function getTodos() {
    let todosList = localStorage.getItem('todos');
    todos.innerHTML = todosList;
}

function addTodo(event) {
    if (event.code === "Enter") {
        let todo = document.getElementById("todo-input").value;

        if (todo) {
            let listItem = `<li><span> <i class="fa fa-trash"></i></span>${todo}</li>`;
            // console.log(listItem);
            document.getElementById("todo-container").innerHTML += listItem;

            document.getElementById("todo-input").value = "";


        } else {
            alert("Enter a valid to-do item");
        }
        localStorage.setItem('todos', todos.innerHTML);
    }
}

document.querySelector('ul').addEventListener('click', function (event) {
    event.target.classList.toggle('completed');
    localStorage.setItem('todos', todos.innerHTML);

});

document.querySelector('ul').addEventListener('click', function (event) {
    if (event.target.tagName === 'I') {
        event.target.parentElement.parentElement.remove();

    }
    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
    }
    localStorage.setItem('todos', todos.innerHTML);

});

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}