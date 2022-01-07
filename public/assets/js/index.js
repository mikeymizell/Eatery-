const createAccountElement = document.getElementById("sign-up-form");
const signUpElement = document.getElementById("sign-up-button");
const loginElement = document.getElementById("login-button")

function signUp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;

    console.log(name, email, username, dob, password);
}

function logIn() {
    const username = document.getElementById('login-user').value;
    const password = document.getElementById('login-pw').value;

    console.log(username, password);
}

signUpElement.addEventListener("click", signUp);
loginElement.addEventListener("click", logIn);