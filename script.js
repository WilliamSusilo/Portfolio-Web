const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    form.submit(); // Submit the form after validation
  }
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  let valid = true;

  if (usernameValue === "") {
    setErrorFor(username, "Name cannot be blank");
    valid = false;
  } else if (!isUsername(usernameValue)) {
    setErrorFor(username, "Name must consist of letters only");
    valid = false;
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    valid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
    valid = false;
  } else {
    setSuccessFor(email);
  }

  if (numberValue === "") {
    setErrorFor(number, "Phone number cannot be blank");
    valid = false;
  } else if (numberValue.length < 10 || numberValue.length > 13) {
    setErrorFor(number, "Not a valid phone number");
    valid = false;
  } else {
    setSuccessFor(number);
  }

  if (subjectValue === "") {
    setErrorFor(subject, "Subject cannot be blank");
    valid = false;
  } else {
    setSuccessFor(subject);
  }

  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
    valid = false;
  } else {
    setSuccessFor(message);
  }

  return valid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isUsername(username) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(username);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.querySelector(".resetBtn").addEventListener("click", function () {
  username.value = "";
  email.value = "";
  number.value = "";
  subject.value = "";
  message.value = "";
  document.querySelectorAll(".form-control").forEach((formControl) => {
    formControl.className = "form-control";
  });
});
