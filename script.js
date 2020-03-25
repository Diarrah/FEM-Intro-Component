let form = document.querySelector('.form');
let fName = document.querySelector('.fName');
let lName = document.querySelector('.lName');
let email = document.querySelector('.email');
let password = document.querySelector('.password');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    let fNameVal = fName.value.trim();
    let lNameVal = lName.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();

    if (fNameVal === '') {
        setError(fName, 'First Name cannot be empty');
    }  else { success(fName) };

    if (lNameVal === '') {
        setError(lName, 'Last Name cannot be empty');
    } else { success(lName) };

    if (emailVal === '') {
        setError(email, 'Email cannot be empty')
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Looks like this is not an email');
    } else { success(email) }

    if (passwordVal === '') {
        setError(password, 'Password cannot be empty');
    } else { success(password) };
}

function setError(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function success(input) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    formControl.className = 'form-control';
    small.className = '';
}

// Regex copied from Stack Overflow //
function validateEmail(email) {
    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
}