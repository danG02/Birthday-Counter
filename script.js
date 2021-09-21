//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const daysFromBD = document.getElementById("days");
const hoursFromBD = document.getElementById("hours");
const minutesFromBD = document.getElementById("minutes");
const secondsFromBD = document.getElementById("seconds");
//const BirthdayText = document.getElementById("text");

var birthday = "02 March 2022";

function countdown() {
    const birthdayDate = new Date(birthday);
    const today = new Date();

    const totalSeconds = (birthdayDate - today) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysFromBD.innerHTML = days;
    hoursFromBD.innerHTML = formatTime(hours);
    minutesFromBD.innerHTML = formatTime(mins);
    secondsFromBD.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;


if (birthdayDate == today) {
    document.getElementById("text").innerHTML = "HAPPY BIRTHDAY!!!!";
}

}

countdown();

setInterval(countdown, 1000);


