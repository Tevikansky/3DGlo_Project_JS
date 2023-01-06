'use strict';
const greetings = document.getElementById('hello');
const day = document.getElementById('day');
const time = document.getElementById('time');
const year = document.getElementById('year');






const days_ru = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let myDate = new Date();
let hello = "";
const Timer = () => {
  const msPerDay = 24 * 60 * 60 * 1000;
  let date = new Date();
  const nextDate = new Date("January 1, 2024")
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = "0" + date.getHours();
  }
  if (minutes < 10) {
    minutes = "0" + date.getMinutes();
  }
  if (seconds < 10) {
    seconds = "0" + date.getSeconds();
  }
  let daysLeft = Math.round((nextDate.getTime() -
    date.getTime()) / msPerDay);

  if (6 < hours && hours < 12) {
    hello = "Доброе утро"
  } else if ((22 < hours && hours < 23) || (0 < hours && hours <= 6)) {
    hello = "Доброй ночи"
  } else if (12 <= hours && hours <= 16) {
    hello = "Добрый день"
  } else {
    hello = "Добрый вечер"
  }
  return {
    hours,
    minutes,
    seconds,
    daysLeft,
    hello
  };

}

const updateClock = () => {
  let getTime = Timer();
  let timerHours = getTime.hours;
  let timerMinutes = getTime.minutes;
  let timerSeconds = getTime.seconds;
  let timerRemaining = getTime.daysLeft;
  let timerHello = getTime.hello;
  // let l = timerHello + "Сегодня: " + days_ru[myDate.getDay()] + "Текущее время: " + timerHours + ":" + timerMinutes + ":" + timerSeconds + " До нового года осталось " + timerRemaining + " дней";
  greetings.textContent = timerHello;
  day.textContent = "Сегодня: " + days_ru[myDate.getDay()];
  time.textContent = "Текущее время: " + timerHours + ":" + timerMinutes + ":" + timerSeconds;
  year.textContent = " До нового года осталось " + timerRemaining + " дней";


}

setInterval(updateClock, 1000)
// console.log(Date_ru, )