const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// PLAN
// Create an array to store registered users.
// Create another array to store banned users.
// Define a 'settings' object to toggle features on/off (add users, check registry, ban users, check banned users).
// Create a menu to let the host choose what to do.
// Allow the user to quit by typing "quit"
// CHALLENGE1: If user already in the ban list, tell them the user was banned already (use if and else statement)
// CHALLENGE2: Use 'settings.allowAdd' in addUser. If true, allow adding users. If false, tell them and stop.

let users = ["Beau", "Poy", "Xiu", "Oliver"];
let banned = [];
let settings = {
  addRegistry: true,
};

function StartApp() {
  readline.question("What would you like to do? (add, check, ban, blacklist, toggle, quit): ", (_command) => {
    if (_command === "add") {
      AddUserToRegistry();
    } else if (_command === "check") {
      CheckRegistry();
    } else if (_command === "ban") {
      BanUser();
    } else if (_command === "blacklist") {
      CheckBanned();
    } else if (_command === "toggle") {
      // Toggle the setting using "!" to switch it to the opposite value.
      settings.addRegistry = !settings.addRegistry;
      console.log(`Adding users is now ${settings.addRegistry ? "enabled" : "disabled"}`);
      StartApp();
    } else if (_command !== "quit") {
      StartApp();
    } else {
      readline.close();
    }
  });
}

function AddUserToRegistry() {
  if (settings.addRegistry === true) {
    readline.question("What is the name? ", (name) => {
      // Challenge check if user is banned
      if (banned.includes(name)) {
        console.log("This user is already on the blacklist and cannot be added to the registry.");
        StartApp();
      } else {
        users.push(name);
        console.log(`${name} is now added to the directory!`);
        StartApp();
      }
    });
  } else {
    console.log("Permission denied. Please come back after I've survived finals week.");
    StartApp();
  }
}

function CheckRegistry() {
  // loop through all the users and log them
  console.log("Registered Users:");
  for (let i = 0; i < users.length; i++) {
    console.log(`User: ${users[i]}`);
  }
  StartApp();
}

function BanUser() {
  // use readline to prompt for the name of the user to be banned
  readline.question("Which user index do you want to ban? (0, 1, 2...): ", (banIndex) => {
    const bannedUser = users.splice(banIndex, 1); // Remove the user from users array
    banned.push(bannedUser[0]); // Push the user's name into banned list
    console.log(`${bannedUser[0]} is now banned.`);
    StartApp();
  });
}

function CheckBanned() {
  // loop through all the banned users and log them
  console.log("Banned Users:");
  for (let i = 0; i < banned.length; i++) {
    console.log(`Banned: ${banned[i]}`);
  }
  StartApp();
}

StartApp();
