let now = new Date();

let greetings;
let hour = now.getHours();
if (hour<12){
    greetings = "Good Morning!!";
}else if (hour<18){
    greetings = "Good Afternoon!!";
}else{
    greetings = "Good Evening";
}
document.getElementById("greeting").textContent = greetings;

let dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let today = dayNames[now.getDay()];
document.getElementById("day").textContent = today + " ," + " ";

let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear()
document.getElementById("date").textContent = day + " " + '/' + " " + (month+1) + " " + '/' + " " + year;

function updateClock(){
    let now = new Date();
    let hour = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = now.getSeconds();
    if (hour <= 12){
        document.getElementById("time").textContent = hour + " " + ":" + " " + minutes + " "  + "a.m";
    }else{
        document.getElementById("time").textContent = (hour-12) + " " + ":" + " " + minutes + " " + "p.m";
    }
}

setInterval(updateClock,1000);

updateClock();

