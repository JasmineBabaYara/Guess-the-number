let answer = 5;
let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let chancesleft = 3;

btn.addEventListener('click', function() {
    let guess = document.getElementById('guess').value;
    chancesleft -= 1;
   while(chancesleft != 0 ){
        
       console.log(chancesleft);
   
        if(guess == answer) {
            output.innerHTML='You guessed correctly';
        }else{
            output.innerHTML = 'Try again!'
        }
    }

        if (chancesleft = 0) {
            output.innerHTML ='You are out of chances';
        
    }
    });