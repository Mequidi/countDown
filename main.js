const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const deadlineFormat = document.querySelectorAll(".deadline-format h4");
console.log(deadlineFormat)

 let futureDate = new Date(2021, 11, 1, 12, 00, 00);
 
function getRemainingTime(){
const sYear = futureDate.getFullYear();
let sMonth = futureDate.getMonth();
const sDate = futureDate.getDate();
const sHour = futureDate.getHours();
const sMinute = futureDate.getMinutes();
let sDay = weekdays[futureDate.getDay()];
sMonth = months[sMonth];

giveaway.innerHTML = `You're gonna recieve a slap on ${sDay}, ${sDate}st ${sMonth} ${sYear} ${sHour}:${sMinute}am`;

let currentMS = new Date().getTime();
let futureMS = futureDate.getTime();

let mS = futureMS - currentMS;

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let secondsLeft = Math.floor((mS % oneMinute) / 1000);
let minutesLeft = Math.floor((mS % oneHour) / oneMinute);
let hoursLeft = Math.floor((mS % oneDay) / oneHour);
let daysLeft = Math.floor(mS / oneDay);

let values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

function format(x) {
    if (x < 10)
        return (`0${x}`);
    else
        return x;
}
deadlineFormat.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
})
console.log(mS)
if(mS<0)
{
    deadline.innerHTML = `<h4>What is this feeling
    That has put you in your place
    A hot red burning
    On the side of your face
    You feel the blood rush to your cheek
    Tears start to fill your eyes
    Your lips are trembling but you can't speak
    You tried
    Oh you tried not to cry
    You just got slapped
    Ooh across the face my friend yeah
    You just got slapped
    Oh yes it really just happened
    (Oh yes it did)
    Oh everybody saw it aahh
    Oh everybody laughed and clapped
    Oh everybody saw it how
    And everybody laughed and clapped
    Cuz'it was awesome (Soo awesome)
    Aahhh
    The way that you just got slapped</h4>`

    clearInterval(repeat);
}

}
const repeat = setInterval(getRemainingTime,1000);
getRemainingTime();