let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let Days = document.getElementById("Days");
const countdownDuration = 5 * 24 * 60 * 60 * 1000;

function setStartTime() {
  const startTime = new Date().getTime();
  localStorage.setItem("startTime", startTime);
}
function getStartTime() {
  return localStorage.getItem("startTime");
}
if (!getStartTime()) {
  setStartTime();
}
function countdown() {
  const currentTime = new Date().getTime();
  const startTime = getStartTime();
  const elapsedTime = currentTime - startTime;
  const remainingTime = countdownDuration - elapsedTime;

  if (remainingTime <= 0) {
    Days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    clearInterval(interval);
    return;
  }

  const remainingDays = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
  const remainingHours = Math.floor(
    (remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const remainingMinutes = Math.floor(
    (remainingTime % (60 * 60 * 1000)) / (60 * 1000)
  );
  const remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
  Days.innerHTML = remainingDays;
  hours.innerHTML = remainingHours;
  minutes.innerHTML = remainingMinutes;
  seconds.innerHTML = remainingSeconds;
}
const interval = setInterval(countdown, 1000);
