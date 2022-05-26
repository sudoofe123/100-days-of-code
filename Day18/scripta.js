const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email is valid or not
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()

    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//get fieldname

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be atleast ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} not be grater than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function passwordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 6, 25);
  passwordMatch(password, password2);

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!validateEmail(email.value)) {
    showError(email, "Email is not Valid");
  } else {
    showSuccess(email);
  }

  document.querySelector(".container").remove();

  document.getElementsByTagName("body")[0].innerText =
    "Thanks for registrng with us";
});
