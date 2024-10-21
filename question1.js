const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.
  
  - If the user's input matches the password exactly, display "Access Granted!"
  - If the user's input does not match, display "Access Denied!"
  - If the user's input is "forgot", display "Here is a hint"
  - If the user's input is "reset", display "Let's reset your account"
  
  CHALLENGE (SAVE FOR LATER)
  - if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
  - the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
  */
  
  
  //create a function to ask the user a password
  //if the user's input matches the password it will display "Access Granted"
  //if the user's input does not match the password it will display "Access Denied"
  //if the user's input is "Forgot" it will display "Here is a hint"
  //if the user's input is "Reset", it will display "Let's reset your account"
  
  //determine a proper function name and parameter variable name
  function CheckThePassword(paramPassword, paramGuess){
  
    let password = paramPassword;
    let guess = paramGuess;
   
   
  
  
    if (password === guess){
      console.log("Access Granted!");
    } else if(password !== guess){
      console.log("Access Denied!");
    } else if(guess === forgot){
      console.log("Here is a hint");
    } else if(guess === reset){
      console.log("Let's reset your account");
    }
  
   
  }
  
  //CHALLENGE FUNCTION
  
  
  function StartApp(){
    readline.question('What is the password', paramPassword => {
      readline.question('Please guess your password', paramGuess => {
  
        //call your function here.
        CheckThePassword(paramPassword, paramGuess);
  
        // readline.close();
        if(paramGuess !== "quit"){
          StartApp();
        } else {
          readline.close();
        }
      });
    });
  }
  
  StartApp();