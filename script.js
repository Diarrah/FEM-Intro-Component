let form = document.querySelector('.form'),
    formControl = form.querySelectorAll('div'),
    first = formControl[0].querySelector('input'),
    last = formControl[1].querySelector('input'),
    email = formControl[2].querySelector('input'),
    password = formControl[3].querySelector('input');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    if (first.value.trim() === '') {
        setError(first, 'First Name cannot be empty');
    }  else { formControl[0].classList.remove('error') };

    if (last.value.trim() === '') {
        setError(last, 'Last Name cannot be empty');
    } else { formControl[1].classList.remove('error') };

    if (email.value.trim() === '') {
        setError(email, 'Email cannot be empty')
    } else if (!validateEmail(email.value.trim())) {
        setError(email, 'Looks like this is not an email');
    } else { formControl[2].classList.remove('error') }

    if (password.value.trim() === '') {
        setError(password, 'Password cannot be empty');
    } else { formControl[3].classList.remove('error') };
}

function setError(input, message) {
    let formControl = input.parentElement,
        small = formControl.querySelector('small');

    formControl.classList.add('error')
    small.innerText = message;
}

// Regex copied from Stack Overflow //
function validateEmail(email) {
    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
}