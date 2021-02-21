// Guess the number

document.querySelector('#guessthenumber-button').addEventListener('click', guessthenumber);

let answer = 5;

function guessthenumber() {
    let guess = prompt('Guess the number');

    if(guess == answer) {
        prompt('You guessed correctly');
    }

    for(let num = 1; num <= 3; num++) {
        if (guess != answer) {
            prompt('Try again');
        }
    }

}
