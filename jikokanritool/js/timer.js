' use strict';

{
  // let now = new Date();
  let stopwatch = document.getElementById('stopwatch');
  let reset = document.getElementById('reset');
  let good = document.getElementById('good');
  let start;
  let timer_id
  let elapsedTime = 0;
  document.getElementById('start_stop').addEventListener('click', function () {
    if (this.innerHTML === 'スタート') {
      start = new Date();
      timer_id = setInterval(goTimer, 10);
      this.innerHTML = 'ストップ';
      reset.disabled = true;
      good.disabled = true;
    } else {
      clearInterval(timer_id);
      elapsedTime += new Date() - start;
      this.innerHTML = 'スタート';
      reset.disabled = false;
      good.disabled = false;
    }
  });

  let addZero = function (value) {
    if (value < 10) {
      value = '0' + value;
    }
    return value;
  }

  let goTimer = function () {
    let now = new Date();
    let milli = now.getTime() - start.getTime() + elapsedTime;
    let seconds = Math.floor(milli / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds - minutes * 60;
    minutes = minutes - hours * 60;
    seconds = addZero(seconds);
    minutes = addZero(minutes);
    hours = addZero(hours);
    stopwatch.innerHTML = `${hours}:${minutes}:${seconds}`;
  }

  reset.addEventListener('click', function () {
    clearInterval(timer_id);
    stopwatch.innerHTML = '00:00:00';
    elapsedTime = 0;
  });




}