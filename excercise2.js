const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

//Make a simple number guessing game
//The correct answer is 15
//If the guess is bigger than the answer, you will say "Too Big! Try again"
//If the guess is smaller than the answer, you will say "Too Small! Try again"
//If the guess is the answer, you will say "You win!"
//If the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
//If the guess is within a range of 5, instead of "Close!", it will say "Almost there!"
//They can guess only 1o times





  const answer = 15; // Correct answer is set to 15
  let numberOfGuessesAllowed = 10;
  let numberOfGuessesMade = 0;
  
  function guessNumber(userGuess) {
    // Convert user input to a number
    const guess = parseInt(userGuess);
  
    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
      return;
    }
  
    numberOfGuessesMade++;
  
    if (guess > answer) {
      console.log("Too Big! Try again");
      if (guess <= answer + 5 && guess > answer) {
        console.log("Almost there!");
      } else if (guess <= answer + 10 && guess > answer) {
        console.log("Close!");
      }
    } else if (guess < answer) {
      console.log("Too Small! Try again");
      if (guess >= answer - 5 && guess < answer) {
        console.log("Almost there!");
      } else if (guess >= answer - 10 && guess < answer) {
        console.log("Close!");
      }
    } else {
      console.log("You win!");
      readline.close();
      return;
    }
  
    if (numberOfGuessesMade >= numberOfGuessesAllowed) {
      console.log("You lose!");
      readline.close();
    }
  }
  
  function startGame() {
    readline.question('Guess the number or type "quit" to exit: ', (userInput) => {
      if (userInput.toLowerCase() === "quit") {
        console.log("Game ended.");
        readline.close();
      } else {
        guessNumber(userInput);
        if (numberOfGuessesMade < numberOfGuessesAllowed) {
          startGame();
        }
      }
    });
  }
  
  console.log("Welcome to the number guessing game! You have 10 attempts.");
  startGame();
  