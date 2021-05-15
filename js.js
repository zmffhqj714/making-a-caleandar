const realtime = document.getElementById("realtime")
const today = new Date();
realtime.innerHTML = today.toLocaleTimeString() + '<br>';

const realday = document.getElementById("realday")
const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const week = ["일","월","화","수","목","금","토"]

const day = today.getDay();
const weekday = week[day];
realday.innerHTML = year +"년 "+ month+"월 " +date+"일 " + weekday + "요일" + '<br>'



