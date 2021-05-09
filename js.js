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


ym = 1
if(ym < 13){
    console.log(ym);
} else {
    continue;
}
const ym = document.getElementById("ym")
ym = 1
ym.innerHTML = "2021년"+ ym +"월" +"br";

}

// // 밑 숫자
const twentyone = range(1,29)
const thirty = document.getElementById("thirty")
thirty.innerHTML = range(1,31)

