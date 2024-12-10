const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  /*
  You are making a simple drinking store application. There are 2 parts to this
  
  1) You need the organizer to register the age of each customer coming in. You will do this using an array.
  2) Depending on the "settings" of the store, 
  if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. 
  When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". 
  When the setting is false, console log "Everyone is welcome in here!"
  
  CHALLENGE 1
  Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting
  
  CHALLENGE 2
  Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.
  
  When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
  */
  
  
  
  
  //PLAN
  //Create an array to register the age of each customer coming in.
  //Create setting for alcohol if it's true means only adult who 19 years old and above can get in and tell them "You are allow to drink in here."
  //Customer who age under 19 can't get in then tell them "You are not allowed in here"
  //If setting for alcohol is false tell them "Everyone is welcome in here!"
  
  //Challenge1
  //Create another setting for age, the default is 19 but user can set the age to another desired drinking age by using command "change age"
  
  //Challenge2
  //Create a Vip setting, the default is false but user can write "make vip" to assign a number to the VIP setting.
  //User can write "cancel vip" to toggle the setting back to false.
  //When VIP is true, only VIP will get notified. Everyone else will get "sorry the store is not available today." message instead.
  
  
  let registry = [];
  let settings = {
    //alcohol setting goes here
    alcohol: true,
    vip: false,
  };
  
  //rename this to RegisterUser
  function RegisterUser(){
    //ask for the age with readline
    if (settings.alcohol === true)
    readline.question("How old are you?", (_age) => {
      registry.push(registry);
      console.log("Your age has been added to the system!")
  
      if (_age >= 19 ){
      console.log("You are allow to drink in here.");
      } else if (_age <19){
        console.log("You are not allowed in here");
      }
      StartApp();
  })    
  }



  //rename this to ToggleAlcohol
  function ToggleAlcohol(){
    settings.alcohol = !settings.alcohol; //toggle alcohol setting
    console.log ("Alcohol is mode is changed now")
    if (settings.alcohol === false)
        console.log ("Everyone is welcome in here!")
    StartApp();
  }
  
  //rename this to NotifyAll
  function NotifyAll(){
    //go through the array to notify everyone
  for (let i=0; i < registry.length; i++){
    console.log(registry[i])
  } StartApp();
  }

  function VipSetting(){

  }

  function AgeSetting(){

  }
  
  function StartApp(){
    readline.question("What is your command? (register, vip setting, age setting, notify, quit) ", _command=>{
      if(_command === "quit"){
        console.log("Exiting the drinking store application, Bye!") 
        readline.close();
      } else if (_command === "register"){
        RegisterUser();
      } else if (_command === "vip setting"){
        VipSetting();
      } else if (_command === "notify"){
        NotifyAll();
      } else if (_command === "age setting"){
        AgeSetting();
      }
      
      
      else{
        StartApp();
      }
    })
  }
  
  StartApp();