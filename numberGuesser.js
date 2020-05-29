/*
    Game Function
    - Player must guess a number between a min and max
    - Player gets a certain amount of guesses
    - Notify player of guesses remaining
    - Notify the player of the correct answer if lost
    - Let player choose to play again
*/

//Game Values
let min = 1,
    max = 10,
    winningNum = getWinningNum(min,max),
    guessesLeft = 3;

//UI Elements
const gameUI = document.getElementById('game'),
    minNumUI = document.querySelector('.min-num'),
    maxNumUI = document.querySelector('.max-num'),
    guessbtnUI = document.getElementById('guess-btn'),
    guessinputUI = document.getElementById('guess-input'),
    messageUI = document.querySelector('.message');  


// Assign UI min and max
minNumUI.textContent = min;
maxNumUI.textContent = max;

// play again event listener
game.addEventListener('mousedown',function(e){
if(e.target.className === 'play-again'){
    window.location.reload();
}
})

// Listen for Guess
guessbtnUI.addEventListener('click', function(e){
    const guess = parseInt(guessinputUI.value);
    
    //Validate
    if( isNaN(guess) || guess < min || guess > max){
       return setMessage(`Please Enter a number between ${min} and ${max}`, 'red');   
    }
      

    // Check if won
    if(guess == winningNum){
        // WINNER WINNER CHICKEN DNNER 

        gameOver(true, `${winningNum} is correct!`)
    } else {
        // Wrong number
        guessesLeft -= 1;

        // check if theres any lives left
        if(guessesLeft === 0){
            // game over
         gameOver(false, `GAME OVER, The Correct number was ${winningNum}.`)
        } else {
            //game continues
            guessinputUI.style.borderColor ='red';
            guessinputUI.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} ${guessesLeft === 1 ? 'life': 'lives'} left`, 'red');

        }
    }
    
});

// game over function
function gameOver(won, msg){
let color;
won === true ? color = 'green' : color = 'red';

  //Disable input
  guessinputUI.disabled = true;
    // Change text color
    messageUI.style.color = color;
  //Change border color
  guessinputUI.style.borderColor = color;
  // Set Message
  setMessage(msg);

  //play again
  guessbtnUI.value = 'Play Again'
  guessbtnUI.className += 'play-again';
}

//randomize winning number
function getWinningNum(min, max){
return Math.floor(Math.random()*(max - min + 1) + min)
}


// Set Message
function setMessage(msg, color){
messageUI.style.color = color;    
messageUI.textContent = msg;
}