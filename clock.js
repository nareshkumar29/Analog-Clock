var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

const sec = document.getElementById("second-hand");
const hr = document.getElementById("hour-hand");
const min = document.getElementById("minute-hand");

setInterval(function(){
    d= new Date();
    second = d.getSeconds()*6;
    minute = d.getMinutes()*6;
    hour = d.getHours()*30 + Math.round(minute/12);

   
   sec.style.transform = `rotate(${second}deg)`;

   hr.style.transform = `rotate(${hour}deg)`;

   min.style.transform = `rotate(${minute}deg)`;


},1000);
