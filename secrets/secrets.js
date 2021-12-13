"use strict";

let play = true;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let secrets = [
    "My favorite pizza topping is boogers",
    "I can move things with my mind",
    "I have proof that Ms Minas is an alien",
    "I have a pet penguin named Peter",
    "President Biden came to my house for Thanksgiving",
]

let textField = document.querySelector("#name");
let secretContainer = document.querySelector("#secret");

function getSecret() {
    if (play) {
        let name = textField.value;
        if (name === "Ms Minas") {
            secretContainer.innerHTML = `<span class="fs-1 text-danger">I'M AN ALIEN!!!</span>`;
        } else {
            let choice = getRandomInt(secrets.length);
            let secret = secrets[choice];
            if (secret) {
                 secrets.splice(choice, 1);
                 secretContainer.innerHTML = `<span class="fs-1">${secret}</span>`;
            } else {
                play = false;
            }
        }
    } else {
        secretContainer.innerHTML = `<span class="fs-1 text-muted">Come back later. I'm tired.</span>`;
    }
}

textField.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        getSecret();
    }
})