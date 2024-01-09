const form = document.querySelector('.form');
const username = document.querySelector('#user');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// ckeck Error
function checkErro(input, message) {
    const fromControle = input.parentElement;
    fromControle.className = 'form_controla error'
    const small = fromControle.querySelector("smaLL");
    small.innerText = message;
}
//show success
function showSuccess(input) {
    const fromControle = input.parentElement;
    fromControle.className = "form_controla success"
}
// password match
function match(input, input2) {
    if (input.value !== input2.value);
}
function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    return re;
}
//check password match 
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        checkErro(input2, 'Password do not match');
    }
}
//check errors
function checkError(input) {
    input.forEach(element => {
        if (element.value === '') {
            checkErro(element, `${element.id.charAt().toUpperCase() + element.id.slice(1)} is required`)
        } else {
            showSuccess(element)
        }
    });
}
// form
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkError([username, email, password, password2])
    checkPasswordMatch(password, password2)
})

