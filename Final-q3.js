const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  /*
  This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. 
  The application allow users to add a color to the system as long as it's part of the 5 colors. 
  You can toggle the colors from true to false with the command "toggle" 
  and then a second readline for the color itself. 
  Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.
  
  Here are some logistics that this application must follow
  Only add a color when the theme color is true otherwise console log that it's not allowed
  
  When a color is toggled from true to false, 
  also remove the color from userColors. 
  You can do this by making a new array, 
  then looping through userColors and only pushing the colors that are true into the new array. 
  Then reassign the new array to userColors.
  */
  
  
  //PLAN
  //Create a theme object including red, green, blue, yellow and orange. Set the default value to true.
  //Allow user to add a color to the system if it's part of the 5 colors.
  //Create a toggle function to set value of color to false and then a second readline for the color itself.
  //Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.
  
  //If the color is false remove color from userColor by create a new array then looping through userColors and push only the true color in to the new array.
  //Reassign the new array to usercolors.
  
  
  
  let userColors = [];
  let theme = {
    //the 5 color and their boolean value goes here
    red: true,
    green: true,
    blue: true,
    yellow: true,
    orange: true,
  };
  
  //rename this to AddUserColor
  function AddUserColor(){
    //add a color to userColors
    readline.question("What color would you like to add?", (_color) => {
      
        StartApp();
    }
  )}
  
  //rename this to DisplayUserColors
  function DisplayUserColors(){
    //add a color to userColors
    console.log("Your color theme are:");
    for (let i = 0; i < userColors.length; i++) {
      console.log("userColors[i]");
      StartApp();
    }
  }
  
  //rename this to ToggleThemeColor
  function ToggleThemeColor(){
    //ask for a color to toggle
    readline.question("What color do you want to toggle?", (_color) => {
      for (let key in theme) {
        if (_color === key) {
          theme[key] = !theme[key];
          console.log(`${_color} is now ${theme[key] ? "available" : "not available"}.`);
        }
      }
      StartApp();
    }
    
    
    )
  }
  
  
  function StartApp(){
    readline.question("What is your command? (add color, toggle color, show theme color) ", _command=>{
      if(_command === "quit"){
        console.log("Exiting the color application. Bye!");
        readline.close();
      } else if (_command === "add color"){
        AddUserColor();
      } else if (_command === "toggle color"){
        ToggleThemeColor();
      } else if (_command === "show theme color") {
        DisplayUserColors();
      }
      
      
      
      else {
        StartApp();
      }
    })
  }
  
  StartApp();