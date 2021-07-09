function playGame() {
    guess = window.prompt("guess a number")
    if (result <9) {  console.log("too low")}

    else if (result === 9) {  console.log("congratulations")}
    
    else if (result > 9) { console.log("too high")}    
}


    let guess = window.prompt("guess a number");

let c = 9; 
while (c != guess){playGame()}
 