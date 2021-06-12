let answer = 5;
let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let chancesleft = 3;

btn.addEventListener('click', function() {
    let guess = document.getElementById('guess').value;
        chancesleft -= 1;

        if(chancesleft != 0){
            if(guess == answer) {
                output.innerHTML='You guessed correctly';
            }else{
                output.innerHTML = 'Try again!'
            }
        }
        
        if (chancesleft == 0) {
            output.innerHTML ='You are out of chances';
            document.getElementById('guess').remove();
        }
});