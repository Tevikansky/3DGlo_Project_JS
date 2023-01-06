const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')
let timerId = null;


  const getTimeRemaining = () => {
    let dataStop = new Date(deadline).getTime();
    let dataNow = new Date().getTime();
    let timeRemaining = (dataStop - dataNow) / 1000;
    // let days = Math.floor((timeRemaining / 86400));
    let hours = Math.floor((timeRemaining / 3600) % 3600);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    if (hours < 10) {
      hours = "0" + Math.floor((timeRemaining / 3600) % 3600);
    }
    if (minutes < 10) {
      minutes = "0" + Math.floor((timeRemaining / 60) % 60);
    }
    if (seconds < 10) {
      seconds = "0" + Math.floor(timeRemaining % 60);
    }
    if (timeRemaining < 0) {
      hours = "00";
      minutes = "00";
      seconds = "00";
      clearInterval(timerId)
    }

    return {
      timeRemaining,
      hours,
      minutes,
      seconds
    };


  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
    console.log("Я секунда")
  }

  updateClock()


  timerId = setInterval(updateClock, 1000)








}

export default timer