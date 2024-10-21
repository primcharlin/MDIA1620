const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.
  
  - If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
  - If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"
  
  CHALLENGE (SAVE FOR LAST):
  - Show the remaining balance if the student has enough money to buy lunch
    - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"
  
  - Show the amount of money still needed balance if the student does not have enough money
    - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
    
  - If the student's remaining balance is less than $5, display "Warning: Low balance!"
  - If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."
  
  */
  
  
  //create a function that simulates a lunch money management system for students. The function will take in a student's name and the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.
  //if student has enough money to buy luch tell them "[student name] purchased [lunch item] purchased!"
  //if student doesn't have enough money tell them "[student name] does not have sufficient funds to buy [lunch item]!"
  
  //Show the remaining balance if the student has enough money to buy lunch "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"
  //Show the amount of money still needed balance if the student does not have enough money "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
  //if the student's remaining balance is less than $5, tell them "Warning: Low balance!
  //if the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds
  
  
  //determine a proper function name and parameter variable name
  function LunchMoney(Name, Money, LunchItem, LunchCost){
    let name = "Name";
    let money = "Money";
    let lunchitem = "LunchItem";
    let lunchcost = "LunchCost";
  
    //write your code here

    if (money >= lunchcost){
        console.log('${name} purchased ${lunchitem} purchased!');
    } else if (money < lunchcost){
        console.log('${name} does not have sufficient funds to buy ${lunchitem}!');
    }
  }
  
  function StartApp(){
    readline.question('What is your name?', Name => {
      readline.question('How much money do you have?', Money => {
        readline.question('What would you like to get for a lunch?', LunchItem => {
          readline.question('What is the price of you lunch item?', LunchCost => {
  
            //call your function here.
            LunchMoney(Name, Money, LunchItem, LunchCost);
  
            // readline.close();
            if(LunchCost !== "quit"){
              StartApp();
            } else {
              readline.close();
            }
          })
        })
      });
    });
  }
  
  StartApp();