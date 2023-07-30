const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm_password')

form.addEventListener('submit', e => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmpassValue = confirm_password.value.trim()

    if (usernameValue === ''){
        setErrorFor(username, "Username cannot be blank")
    } else {
        setSuccesFor(username)
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    } else {
        setSuccesFor(email)
    }

    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccesFor(password)
    }

    if (confirmpassValue === ''){
        setErrorFor(confirm_password, 'Password cannot be blank')
    } else if (passwordValue != confirmpassValue) {
        setErrorFor(confirm_password, 'Passwords does not match')
    } else {
        setSuccesFor(confirm_password)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    formControl.className = 'form-control error'
    small.innerText = message;
}

function setSuccesFor(input){
    const formControl = input.parentElement
    
    formControl.className = 'form-controll success'
}