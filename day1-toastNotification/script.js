const button = document.getElementById("button");

const toasts = document.getElementById("toasts");

const toaststwo = document.querySelector(".toaststwo");

const messages = [
  "Message One",
  "Message two",
  "Message three",
  "Message four",
  "Message five",
];

const types = ["info", "success", "error"];
button.addEventListener("click", function () {
  createNotification();
});

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);

  const notif2 = document.createElement("div");
  notif2.classList.add("toast2");
  notif2.classList.add(type ? type : getRandomType());
  notif2.innerText = message ? message : getRandomMessage();

  toaststwo.appendChild(notif2);
  setTimeout(() => {
    notif2.remove();
  }, 3000);
}

function getRandomMessage() {
  //getting  messages from random indexes
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
