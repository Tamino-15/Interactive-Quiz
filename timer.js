var timeLeft = 30;
var elem = document.getElementById('timer');

var timerId = setTimeout(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}