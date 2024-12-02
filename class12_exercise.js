const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});



//PLAN
// Create an object to represent users and roles.
// Define the roles in object (moderator, simple, coAdmin) with a set of permission.
// Implement commands to toggle permissions on or off for all roles.
// Allow the user to quit by typing "quit"

// CHALLENGE1: Write a function 'togglePermissions(state)'.
// Use 'for (let key in obj)' to loop through roles and update permissions based on 'state'.


// CHALLENGE2: Write a function 'assignRole(user, role)'.
// Use 'for (let key in obj)' to copy permissions from the chosen role to the user.



let users = [];

// Role definitions
let role = {
    moderator: {
        darkMode: true,
        sensitivityAmount: false,
        editAccounts: true,
        deleteAccounts: false,
        createChannels: false,
        editChannels: true,
    },
    simple: {
        darkMode: true,
        sensitivityAmount: false,
        editAccounts: false,
        deleteAccounts: false,
        createChannels: false,
        editChannels: false,
    },
    coAdmin: {
        darkMode: true,
        sensitivityAmount: true,
        editAccounts: true,
        deleteAccounts: false,
        createChannels: true,
        editChannels: true,
    },
};

let settings = {
    darkMode: true,
    sensitivityAmount: true,
    editAccounts: true,
    deleteAccounts: true,
    createChannels: true,
    editChannels: true,
};

function createUser() {
    readline.question("Enter the name of the user to add: ", (name) => {
        if (name) {
            users.push({ name, permissions: { ...settings } });
            console.log(`${name} added successfully!`);
        } else {
            console.log("Invalid name.");
        }
        StartApp();
    });
}

function assignRole() {
    readline.question("Enter the name of the user to assign a role: ", (name) => {
        const user = users.find((u) => u.name === name);
        if (!user) {
            console.log("User not found.");
            return StartApp();
        }

        readline.question("Enter the role to assign (moderator, simple, coAdmin): ", (roleName) => {
            if (role[roleName]) {
                user.permissions = { ...role[roleName] };
                console.log(`${roleName} role assigned to ${name}.`);
            } else {
                console.log("Invalid role.");
            }
            StartApp();
        });
    });
}

function listUsers() {
    if (users.length === 0) {
        console.log("No users available.");
    } else {
        console.log("Users:");
        users.forEach((user, index) => {
            console.log(`${index + 1}. ${user.name}`);
        });
    }
    StartApp();
}

function assignPermissions() {
    readline.question("Enter the name of the user to modify permissions: ", (name) => {
        const user = users.find((u) => u.name === name);
        if (!user) {
            console.log("User not found.");
            return StartApp();
        }

        Object.keys(settings).forEach((key) => {
            readline.question(`Set ${key} (true/false): `, (value) => {
                user.permissions[key] = value === "true";
            });
        });

        console.log("Permissions updated successfully.");
        StartApp();
    });
}

function togglePermissions(turnOn) {
    users.forEach((user) => {
        Object.keys(user.permissions).forEach((key) => {
            user.permissions[key] = turnOn;
        });
    });
    console.log(`All permissions turned ${turnOn ? "on" : "off"} for all users.`);
    StartApp();
}

function showPermissions() {
    if (users.length === 0) {
        console.log("No users to display.");
    } else {
        users.forEach((user) => {
            console.log(`User: ${user.name}`);
            console.log("Permissions:", user.permissions);
        });
    }
    StartApp();
}

function StartApp() {
    console.log("\nCommands: createUser, assignRole, listUsers, assignPermissions, showPermissions, toggleOn, toggleOff, quit");
    readline.question("What would you like to do? ", (command) => {
        switch (command) {
            case "createUser":
                createUser();
                break;
            case "assignRole":
                assignRole();
                break;
            case "listUsers":
                listUsers();
                break;
            case "assignPermissions":
                assignPermissions();
                break;
            case "showPermissions":
                showPermissions();
                break;
            case "toggleOn":
                togglePermissions(true);
                break;
            case "toggleOff":
                togglePermissions(false);
                break;
            case "quit":
                readline.close();
                break;
            default:
                console.log("Invalid command.");
                StartApp();
        }
    });
}

StartApp();



//Your code is functional and well-structured for implementing a role and permission management system. Good job!
//Xiuzi