import "./styles.css";
import { displayErrors , displayLoginErrors } from "./errorMsgFile.js";

const registrationForm = document.getElementById("registration");
const loginForm = document.getElementById("login");
// const errorMsgs = document.getElementById("errorDisplay");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const messages = [];
  const username = registrationForm.elements["username"].value.trim();
  const email = registrationForm.elements["email"].value.trim();
  const password = registrationForm.elements["password"].value;
  const passwordCheck = registrationForm.elements["passwordCheck"].value;
  const terms = registrationForm.elements["terms"];

  const userPattern = /^[a-zA-Z0-9]{4,}$/;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;

  if (username === "") {
    messages.push("Username cannot be blank.");
  } else if (!username.match(userPattern)) {
    messages.push(
      "Username must be at least four characters long,The username must contain at least two unique characters,The username cannot contain any special characters or whitespace."
    );
  }

  if (email === "") {
    messages.push("Please enter a valid email address.");
  } else if (email.match(emailPattern) === null) {
    messages.push("Please enter a valid email address.");
  } else if (email.slice(-12) === "@example.com") {
    messages.push(
      "Email addresses from the domain 'example.com' are not allowed."
    );
  }

  if (!passwordPattern.test(password)) {
    messages.push(
      "Password must be at least 12 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character."
    );
  }
  if (password.toLowerCase().includes("password")) {
    messages.push("Password cannot contain the word 'password'.");
  }
  if (password.toLowerCase().includes(username.toLowerCase())) {
    messages.push("Password cannot contain the username.");
  }
  if (password !== passwordCheck) {
    messages.push("Passwords do not match.");
  }

  if (!terms.checked) {
    messages.push("Please check the Terms of Use!");
  }

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  displayErrors(messages);
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("inside login event");
  const storedUser = localStorage.getItem("username");
  console.log("storeduser" + storedUser);
  const storedPassword = localStorage.getItem("password");

  const messages = [];
  const username = loginForm.elements["username"].value;
  console.log("username" + username);
  const password = loginForm.elements["password"].value;
  const persist = loginForm.elements["persist"];

  const userPattern = /^[a-zA-Z0-9]{4,}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;

  if (username === "") {
    messages.push("Username cannot be blank.");
  } else if (!(storedUser === username)) {
    messages.push("username does not exist");
  } else if (password === "") {
    messages.push("password cannot be blank");
  } else if (!(password === storedPassword)) {
    messages.push("Password does not match");
  }

  displayLoginErrors(messages, persist);
});

