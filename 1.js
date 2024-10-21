const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding driving privileges.

- If the person is under 16, they should be told "too young to drive".
- If they are between 16 and 17, they should be told "can drive with supervision".
- If they are between 18 and 70, they should be told "can drive freely".
- If they are over 70, they should be advised to "consider a driving assessment".
*/

//Create a function to ask the age of user
//use variable for the user's age
//if user <16 tell them too young to drive
//if user 16-17 tell them can drive with supervision
//if user 18-70 tell them can drive freely
//if user <70 tell them consider a driving assessment

//determine a proper parameter variable name
function CheckDrivingAge(Age){

  let driverAge = Age;

if(driverAge < 16){
  console.log("You're too young to drive");
} else if(driverAge >= 16 && driverAge <= 17){
  console.log("can drive with supervision");
} else if(driverAge >=18 && driverAge <= 70){
  console.log("can drive freely");
} else if(driverAge > 70){
  console.log("consider a driving assessment");
}
  
}

function StartApp(){
  readline.question('How old are you? ', _age => {

    //call your function here.
    CheckDrivingAge(_age);

    // readline.close();
    if(_age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();