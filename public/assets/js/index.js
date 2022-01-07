const signUpElement = document.getElementById("sign-up-button");
const loginElement = document.getElementById("login-button")

const passwordValidation = (password) => {
    if (password.length < 8) {
        return false;
    };
    return true;
}

const signupValidation = (name, email, username, dob, password) => {
    if (name === "") {
        return false;
    }
    else if (email === "") {
        return false;
    }
    else if (username === "") {
        return false;
    }
    else if(dob === "") {
        return false;
    }
    else if(!passwordValidation(password)) {
        return false;
    };
    return true;
}

const loginValidation = (username, password) => {
    if (username === "") {
        return false;
    }
    else if (!passwordValidation(password)) {
        return false;
    };
    return true;
}


function signUp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;

    console.log(name, email, username, dob, password);

    if (signupValidation(name, email, username, dob, password)) {
        console.log('success');
    }
    else {
        console.log('failed');

    };
}

function logIn() {
    const username = document.getElementById('login-user').value;
    const password = document.getElementById('login-pw').value;

    console.log(username, password);
}



if (window.location.pathname === '/') {
    signUpElement.addEventListener("click", signUp);
    loginElement.addEventListener("click", logIn);
}
else {
    loginElement.addEventListener("click", logIn);
}
