let days1 = document.querySelector("#day");
let hours1 = document.querySelector("#hour");
let minutes1 = document.querySelector("#minute");
let seconds1 = document.querySelector("#second");

const newYearTime = new Date("Jan 1, 2028 00:00:00").getTime();

updateCountDown();

function updateCountDown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  days1.innerText = d;
  hours1.innerText = h;
  minutes1.innerText = m;
  seconds1.innerText = s;

  setTimeout(updateCountDown,1000);
}
