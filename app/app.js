const moveInDate = "2019-03-15 12:00";

const finalDate = moment(moveInDate);
let duration = finalDate.countdown(moment());
const displayTime = document.getElementById("time");

function getDuration() {
  let currentDate = moment();
  return finalDate.countdown(currentDate);
}

function updateDisplay() {
  displayTime.innerHTML = duration;
}

updateDisplay();

setInterval(function() {
  duration = getDuration().toString();
  updateDisplay();
}, 1000);
