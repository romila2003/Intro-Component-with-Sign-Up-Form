const submit = document.getElementById("submit");

let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let name = ["First Name cannot be empty", "Last Name cannot be empty", "Password cannot be empty"];

submit.addEventListener("click", () => {
    const email = document.getElementById("email");
    const input = document.querySelectorAll(".loop");
    const text = document.querySelectorAll(".text");

    for(let i = 0; i < input.length; i++) {
        for(let i = 0; i < text.length; i++) {
           if(input[i].value === "") {
            input[i].classList.add("error");
            text[i].innerHTML = name[i];
        } else {
            input[i].classList.remove("error");
            text[i].innerHTML = "";
        } 
    }

    if(email.value === "") {
        email.classList.add("error");
        email.innerHTML = "Email cannot be empty";
    } else if(!email.value.match(emailFormat)) {
        email.innerHTML = "Looks like this is not an email";
    } else {
        email.classList.remove("error");
    }
} 
    
    
});
