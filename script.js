// Guess the number

document.querySelector('#guessthenumber-button').addEventListener('click', guessthenumber);

let answer = 5;
let chancesleft = 3;

function guessthenumber() {
    let guess = prompt('Guess the number');

    if(guess == answer) {
        prompt('You guessed correctly');
    }
    
    while( chancesleft != 0) {
        chancesleft -= 1

    } if(guess != answer) {
        prompt('Try again');
    
    }
}