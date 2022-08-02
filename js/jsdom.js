/* PROJECT 1: QUOTES GENERATOR*/
/*
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    author: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    author: ` Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    author: `Aristotle`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    author: ` Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    author: ` Benjamin Franklin`
}, {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    author: `Oprah Winfrey`
}, {
    quote: `"t does not matter how slowly you go as long as you do not stop."`,
    author: `Confucius`
}, {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    author: `Martin Luther King, Jr.`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    author: `Dalai Lama`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    author: `Lao Tzu`
}];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
});

// /* PROJECT 2: MODAL*/
// let openBtn = document.getElementById('open-btn');
// let modalContainer = document.getElementById('modal-container');
// let closeBtn = document.getElementById('close-btn');

// openBtn.addEventListener('click', function() {
//     modalContainer.style.display = 'block';
// });

// closeBtn.addEventListener('click', function(){
//     modalContainer.style.display = 'none';
// })

/* PROJECT 3 : ACCORDION */
const accordion = document.getElementsByClassName('content-container');

for (i=0; i< accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}

/* PROJECT 4:  WATCH */
//Variables for buttons 

// const starStopButton = document.querySelector('#startStopButton');
// const resetButton = document.querySelector('#resetButton');

// // Variables for time values

// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// // Variables for set interval & timerstatus

// let timerInterval = null;
// let timerStatus = "stopped";

// // Variables por leading zero

// let leadingSeconds = 0;
// let leadingMinutes = 0;
// let leadingHours = 0;

// //Stop watch function

// function stopwatch() {
//     seconds++;
//     if(seconds / 60 === 1) {
//         seconds = 0;
//         minutes++;

//         if(minutes / 60 ===1) {
//             minutes = 0;
//             hours++;
//         }
//     }

//     if(seconds<10) {
//         leadingSeconds = "0" + seconds.toString();
//     } else {
//         leadingSeconds = seconds;
//     }
//     if(minutes<10) {
//         leadingMinutes = "0" + minutes.toString();
//     } else {
//         leadingMinutes= minutes;
//     }
//     if(hours<10) {
//         leadingHours = "0" + hours.toString();
//     } else {
//         leadingHours = hours;
//     }

//     // let displayTimer = 
//     document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
// }

// starStopButton.addEventListener('click', function(){
//     if(timerStatus === "stopped") {
//         timerInterval = window.setInterval(stopwatch, 1000);
//         document.getElementById('startStopButton').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
//         timerStatus = "started";
//     } else {
//         window.clearInterval(timerInterval);
//         document.getElementById('startStopButton').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
//         timerStatus = "stopped";
//     }
// })
// // window.setInterval(stopwatch, 1);

// resetButton.addEventListener('click', function(){
//     window.clearInterval(timerInterval);
//     seconds = 0;
//     minutes = 0;
//     hours = 0;

//     document.getElementById('timer').innerHTML = "00:00:00";
// })

/* PROJECT 5: TODO LIST */

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

//Event Listener for Add Button

addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add("task");
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);    

    if(inputTask.value === "") {
        alert('Introduce una tarea');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = "line-through";
    })
    
    deleteButton.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
})

