// Guess the number



/*let answer = 5;
let chancesleft = 3;
let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

 btn.addEventListener('click', function() {

    let guess = document.getElementById('guess').value;

        if (guess == answer) {
            output.innerHTML = 'You guessed correctly'
        }else if(guess!= answer){ 
            output.innerHTML = 'Try again'
            }

            while(chancesleft != 0) {
                chancesleft -= 0;
                if(chancesleft = 0) {
                    document.getElementById('guess').remove
                }

            }
        
    });*/

//Guess the number 2

document.querySelector('#guessthenumber-button').addEventListener('click', guessthenumber);

    let answer = 5;
    let chancesleft = 3;

    function guessthenumber() {
        let guess = prompt('Guess the number');

    
           while(chancesleft != 0) {
                chancesleft -= 1;
           if(guess == answer){
                prompt('You guessed correctly');
    
            }else{
                prompt('Try again');
            }

            if (chancesleft == 0 ) {
                prompt('You are out of chances');
            }
        }


    } 



    
