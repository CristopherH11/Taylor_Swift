import { generateToken } from "./Tokenizer.js";

const loginButton = document.getElementById('loginButton');
loginButton?.addEventListener('click', (event) => {
  event.preventDefault();
  login();
});

function login() {
  console.log("Logging in");
  const username = document.getElementById('username').value;
  if (username) {
    const userExists = validateCredentials(username);
    if (!userExists) {
      saveToken(username);
    }
    localStorage.setItem("user_id", username);
    window.location.href = '/generate'
  } else {
  }
}

function validateCredentials(username) {
  const value = localStorage.getItem(username);
  if (value) {
    return true;
  }
  return false;
}

function saveToken(user) {

  const token = generateToken();

  localStorage.setItem(user, token);
}



