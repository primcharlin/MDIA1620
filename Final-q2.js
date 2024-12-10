const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  /*
  You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.
  
  1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
  2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.
  
  CHALLENGE 1
  1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
    - less than 10 -> "horrible newbie"
    - between 10 and 20 -> "adventurer"
    - between 20 to 30 -> "slayer"
    - between 30 to 40 -> "divined"
    - above 40 -> "eternal"
  
  CHALLENGE 2
  2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
  */
  
  
  //PLAN
  //Create a badge system that depends on the amout of points accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse".Set defalt value all start with 0.
  //Create function "ShowStatus" when user command "status" and it will shows every mode and it's current points.
  //Create function "AddPoints" when user command "add" and it will ask the user which mode they want to add 1 point to.
  //Let the user write one of the mode and that mode will be incremented by 1.
  
  //Challenge
  /*Create a function MakeBadge. 
 This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"
  */
  
  //Challenge
  //Multiply the points to the length of the key.
  
  
  let badge = {
    //modes go here
    new: 0,
    easy: 0,
    medium: 0,
    hardest: 0,
    apocolypse: 0,
  };
  
  //rename this to ShowStatus
  function ShowStatus(){
    //loop through the badge and log all the mode and all their corresponding points
    for (let key in badge) {
      console.log("The badge mode", key, "has", badge[key], "points");
    }

    function MakeBadge() {
        let pointstatus = "";
        if  (totalpoint < 10)
            pointstatus = "horrible newbie";
        else if (totalpoint >= 10 && totalpoint <=20)
            pointstatus = "adventurer";
        else if (totalpoint >= 20 && totalpoint <= 30)
            pointstatus = "slayer";
        else if (totalpoint >= 30 && totalpoint <= 40)
            pointstatus = "divined";
        else if (totalpoint >= 40)
            pointstatus = "eternal";

    }

    StartApp();
  }
  
  //rename this to AddPoints
  function AddPoints(){
    //Add the point to the correct mode by capturing the readline
    readline.question("What is the mode you want to add the point? ", (_mode) => {
        StartApp();
  }

      );
  }
  
  
  
  function StartApp(){
    readline.question("What is your command? (add point, status, quit) ", _command=>{
      if(_command === "quit"){
        console.log("Exiting the color application. Bye!");
        readline.close();
      } else if (_command === "add point") {
        AddPoints();
      } else if (_command === "status") {
        ShowStatus();
      } else if (_command === "make badge") {
        MakeBadge();
      }
      
    
      else{
        StartApp();
      }
    })
  }
  
  StartApp();