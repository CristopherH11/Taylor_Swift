import { generateToken } from "./Tokenizer.js";

const loginButton = document.getElementById('loginButton');
loginButton?.addEventListener('click', (event) => {
  event.preventDefault();
  // console.log("Clicked on login button");
  login();
});

function login() {
  console.log("Logging in");
  const username = document.getElementById('username').value;
  if (username) {
    // console.log("Username is: " + username);
    // validate credentials
    const userExists = validateCredentials(username);
    if (!userExists) {
      // console.log("User exists");
      saveToken(username);
      // console.log("Token saved");
    }
    // if success, then save the current user on LS
    localStorage.setItem("userinfo_id", username);
    // console.log("Saved current user");
    window.location.href = '/generate'
  } else {
    // 
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
  // console.log("Saving token");

  const token = generateToken();

  localStorage.setItem(user, token);
}



