const randomNumber = Math.floor((Math.random)*100)+1;
console.log("Random Number",randomNumber);
function checkGuess()
{
    let myGuess = myGuess.value;
    if(myGuess === randomNumber)
    {
        feedback.textContent = "You Got it Right!";
    }
    else if(myGuess > randomNumber)
    {
        feedback.textContent = "Your Guess was " + myGuess + ". That's too high. Try Again!"
    }
    else if(myGuess < randomNumber)
    {
        feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
    }
    submitGuess.addEventListener('click', checkGuess);
}