# Frontend Mentor - Intro component with sign up form

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

- Build out the project to the designs provided.

### Screenshot

# Mobile Preview 

![screenshot](https://github.com/romila2003/Intro-Component-with-Sign-Up-Form/blob/main/Mobile%20preview.PNG)

# Mobile Preview - active

![screenshot](https://github.com/romila2003/Intro-Component-with-Sign-Up-Form/blob/main/Mobile%20preview%20-%20active.PNG)

# Desktop Preview 

![screenshot](https://github.com/romila2003/Intro-Component-with-Sign-Up-Form/blob/main/Desktop%20preview.PNG)

# Desktop Preview - active

![screenshot](https://github.com/romila2003/Intro-Component-with-Sign-Up-Form/blob/main/Desktop%20preview%20-%20active.PNG)


### Links

 - Source code: [https://github.com/romila2003/Intro-Component-with-Sign-Up-Form](https://github.com/romila2003/Intro-Component-with-Sign-Up-Form)
 - Live website: [https://intro-component-with-sign-up-form-main.netlify.app/](https://intro-component-with-sign-up-form-main.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Vanilla Javascript
- Flexbox
- Mobile-first workflow

### What I learned

I enjoyed this challenge in particular because of the design and had the figma design for this project too therefore it was easier to recreate the box-shadow and follow the design scheme. It was also fun to use media queries to change the elements, as the screen size changed. Regarding Javascript, my code is fairly simple to follow and is functional however it is quite long which should be shortened, to prevent repetitive codes.

UPDATE: Rather than giving each inpit its own javascript properties, I created a `for` loop that goes through each input and hecks whether it is empty or not. If it is empty, then it will show the error icon and provide a statement however if it includes text, then it will accept it as a valid input. This approach allowed me to use less code and produce the same effect which is good practice for coding.

Javascript - if/else statement: 

```javasript

submit.addEventListener("click", () => {
    const input = document.querySelectorAll("input");
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

    if(input[2].value.match(emailFormat)) {
        input[2].classList.remove("error");
    } else {
        input[2].classList.add("error");
        text[2].innerHTML = name[2];
    }
} 
});

```

### Continued development

For future developments, I need to work on using more javascript in future projects and writing shorter codes that still provide the same effect for time efficiency. Also, I should begin taking on more challenging responsive projects to test my layout skills. 


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)

