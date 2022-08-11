const form = document.querySelector(".form-field");
const email = document.getElementById("email");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const emailText = document.getElementById("email-text");
const firstNameText = document.getElementById("fname-text");
const lastNameText = document.getElementById("lname-text");
const passwordText = document.getElementById("password-text");

let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

submit.addEventListener("click", () => {
    if(firstName.value === "") {
        form.classList.add("invalid");
        form.classList.remove("valid");
        firstNameText.innerHTML = "First Name cannot be empty";
        firstName.classList.toggle("error");
    } else {
        form.classList.add("valid");
        form.classList.remove("invalid");
    }

    if(lastName.value === "") {
        form.classList.add("invalid");
        form.classList.remove("valid");
        lastNameText.innerHTML = "Last Name cannot be empty";
        lastName.classList.toggle("error");
    } else {
        form.classList.add("valid");
        form.classList.remove("invalid");
    }

    if(email.value.match(emailFormat)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        emailText.innerHTML = "Looks like this is not an email";
        email.classList.toggle("error");
    }

    if(password.value === "") {
        form.classList.add("invalid");
        form.classList.remove("valid");
        passwordText.innerHTML = "Last Name cannot be empty";
        password.classList.toggle("error");
    } else {
        form.classList.add("valid");
        form.classList.remove("invalid");
    }
});