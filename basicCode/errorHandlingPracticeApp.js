use strict";
let userMessage;
let repeatMessageThisManyTimes;

class UserInputError extends Error {}

function takeUserInput() {
    userMessage = prompt("Please enter a message:");
    do {
        try {
            userMessage = Number(prompt("How many times would you like your message to be repeated?"));
            if(!repeatMessageThisManyTimes) {
            throw new UserInputError("Not a Number");
            }
        } catch(error) {
            console.log(error.message);
        }
    } while(!repeatMessageThisManyTimes);
}

takeUserInput();

function repeatMessage() {
    for(let i = 0; i < repeatMessageThisManyTimes; i++) {
        console.log(userMessage);
    }
}

repeatMessage();
```
