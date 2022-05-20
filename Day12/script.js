setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentdate = new Date();

  const secondsRatio = currentdate.getSeconds() / 60;
  //   const minutesRatio = currentdate.getMinutes() / 60;
  const minutesRatio = (secondsRatio + currentdate.getMinutes()) / 60;
  //   console.log(minutesRatio);
  const hoursRatio = (minutesRatio + currentdate.getHours()) / 12;
  //   console.log(currentdate);
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

// const currentdate = new Date();
// const div = document.querySelector(".div");
// const newEl = document.createElement("div");
// newEl.innerText = currentdate;
// div.append(newEl);
