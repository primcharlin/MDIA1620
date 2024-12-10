const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let favFruits = []; // ตัวแปรสำหรับเก็บรายการผลไม้ที่ชอบ

// CHALLENGE
let fruitSettings = {
  apple: true, // ผลไม้พร้อมใช้งาน
  banana: true,
  cherry: true,
  date: true,
  elderberry: true,
};

// Function to add a fruit
function AddFruit() {
  readline.question("What fruit would you like to add? ", (_fruit) => {
    let checkFruitAllowed = false;

    for (let key in fruitSettings) {
      // Check if the fruit is allowed and available
      // ตรวจสอบว่าผลไม้ได้รับอนุญาตและพร้อมใช้งานหรือไม่
      if (_fruit === key && fruitSettings[key] === true) {
        checkFruitAllowed = true;
      }
    }

    // If the fruit is allowed, add it to the favorites list
    // หากผลไม้ได้รับอนุญาต ให้เพิ่มลงในรายการที่ชอบ
    if (checkFruitAllowed) {
      favFruits.push(_fruit);
      console.log(`${_fruit} has been added to your favorites.`);
    } else {
      console.log(`${_fruit} cannot be added to your favorites or is not available.`);
    }

    DisplayFruits(); // แสดงรายการผลไม้ที่ชอบในปัจจุบัน
    StartApp(); // เริ่มโปรแกรมใหม่
  });
}

// Function to display all favorite fruits
// ฟังก์ชันสำหรับแสดงผลไม้ที่ชอบทั้งหมด
function DisplayFruits() {
  console.log("Your favorite fruits are:");
  for (let i = 0; i < favFruits.length; i++) {
    console.log(favFruits[i]);
  }
}

// CHALLENGE
// Function to toggle the availability of a fruit
// ฟังก์ชันสำหรับสลับสถานะการใช้งานของผลไม้
function ToggleFruitSetting() {
  readline.question("Which fruit do you want to toggle? ", (_fruit) => {
    for (let key in fruitSettings) {
      if (_fruit === key) {
        // Toggle the availability of the fruit
        // สลับสถานะการใช้งานของผลไม้
        fruitSettings[key] = !fruitSettings[key];
        console.log(`${_fruit} is now ${fruitSettings[key] ? "available" : "not available"}.`);
      }
    }
    StartApp(); // เริ่มโปรแกรมใหม่
  });
}

// Function to remove a fruit
// ฟังก์ชันสำหรับลบผลไม้ออกจากรายการที่ชอบ
function RemoveFruit() {
  readline.question("Which fruit do you want to remove? ", (_fruit) => {
    // Create a new array to store all other fruits that are not the one you want to remove
    // สร้างอาร์เรย์ใหม่เพื่อเก็บผลไม้อื่น ๆ ที่ไม่ใช่ผลไม้ที่ต้องการลบ
    let newFruitsArray = [];
    for (let i = 0; i < favFruits.length; i++) {
      if (_fruit !== favFruits[i]) {
        // Add all other fruits except the one you want to remove
        // เพิ่มผลไม้อื่น ๆ ที่ไม่ใช่ผลไม้ที่ต้องการลบ
        newFruitsArray.push(favFruits[i]);
      }
    }

    // Change the list to the array without the removed fruit
    // เปลี่ยนรายการให้เป็นอาร์เรย์ที่ไม่มีผลไม้ที่ลบออกไป
    favFruits = newFruitsArray;
    console.log(`${_fruit} has been removed from your favorites.`);
    DisplayFruits(); // แสดงรายการผลไม้ที่ชอบในปัจจุบัน
    StartApp(); // เริ่มโปรแกรมใหม่
  });
}

// Main application function
// ฟังก์ชันหลักของโปรแกรม
function StartApp() {
  readline.question("What is your command? (add, remove, toggle, quit) ", (_command) => {
    if (_command === "quit") {
      console.log("Exiting the fruit management application. Bye!");
      readline.close();
    } else if (_command === "add") {
      AddFruit();
    } else if (_command === "remove") {
      RemoveFruit();
    } else if (_command === "toggle") {
      ToggleFruitSetting();
    } else {
      console.log("Invalid command. Please try again.");
      StartApp(); // เริ่มโปรแกรมใหม่ในกรณีที่คำสั่งไม่ถูกต้อง
    }
  });
}

StartApp(); // เริ่มการทำงานของโปรแกรม
