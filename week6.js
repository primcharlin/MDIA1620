const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
  however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
  if they are in their teens, then tell them they need to "grow up to 19" before they can drink
  if they are between 19 to 50, then "drink away"
  if they are over 50, then warn them about their "health"
  if they are over 70, then ALSO warn them about their "life"
  */
  
  
  //determine a proper parameter variable name
  
  
  //Ask the user How old are you?
  //use variable for the user's age
  //under 13 too young should leave 
  //13-19 ask them wait until 19
  //19-50 tell them drink away
  //over 50 warn them about their health
  //over 70 warn them about their life
  
  
  //determine a proper question to ask and the proper variable name for user input
  

  
    //call your function here
  
  
    function CheckDrinkingAge(Age){
        if (Age < 13) {
            console.log("You should leave.");
        } 
        else if (Age<=19) {
        console.log("You should wait until 19.");
        }
        else if (Age > 19 && Age <= 50) {
          console.log("Drink away.");
        }
        else if (Age > 50 && Age <= 70){
            console.log("It's not healthy.")
        }
        else if (Age > 70){
            console.log("Be careful about your life.");
        }
      }

      //determine a proper question to ask and the proper variable name for user input
      readline.question('How old are you?', age => {
    
        CheckDrinkingAge(Number(age));
        CheckDrinkingAge();
        readline.close();
      });