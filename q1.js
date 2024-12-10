const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// สร้างตัวแปรเก็บข้อมูลหนังสือที่ลงทะเบียน
let bookRegistry = [];
let libraryCard = {
  borrow: false, // ตัวแปรที่บอกว่าการยืมหนังสือเปิดใช้งานหรือไม่
};

// Function to register a book
// ฟังก์ชันสำหรับลงทะเบียนหนังสือ
function RegisterBook() {
  // ถ้าสถานะการยืมเปิดใช้งาน
  if (libraryCard.borrow === true) {
    readline.question("What book are you registering? ", (_book) => {
      let exist = false; // ตัวแปรตรวจสอบว่าหนังสือมีอยู่แล้วหรือไม่
      for (let i = 0; i < bookRegistry.length; i++) {
        if (bookRegistry[i] === _book) {
          exist = true; // ถ้าพบว่าหนังสือมีอยู่แล้ว ให้ตั้งค่า exist เป็น true
          break; // ออกจากลูปทันที
        }
      }

      if (exist === false) {
        bookRegistry.push(_book); // เพิ่มหนังสือเข้าไปในรายการ
        console.log(`The book "${_book}" has been registered.`);
      } else {
        console.log(`The book "${_book}" is already registered and cannot be borrowed again.`);
      }

      StartApp(); // กลับไปยังฟังก์ชันเริ่มต้นของแอปพลิเคชัน
    });
  } else {
    console.log("You cannot register books until borrow mode is enabled.");
    StartApp(); // กลับไปยังฟังก์ชันเริ่มต้นถ้ายังไม่เปิดโหมดการยืม
  }
}

// Function to toggle borrow setting
// ฟังก์ชันสำหรับเปิดหรือปิดโหมดการยืมหนังสือ
function ToggleBorrow() {
  libraryCard.borrow = !libraryCard.borrow; // สลับสถานะโหมดการยืม
  console.log("Your borrow setting is now", libraryCard.borrow ? "enabled" : "disabled");
  StartApp(); // กลับไปยังฟังก์ชันเริ่มต้นของแอปพลิเคชัน
}

// Function to list all registered books
// ฟังก์ชันสำหรับแสดงรายการหนังสือที่ลงทะเบียนแล้ว
function ListBooks() {
  if (bookRegistry.length === 0) {
    console.log("No books are currently registered."); // ถ้าไม่มีหนังสือในรายการ
  } else {
    console.log("Registered Books:");
    for (let i = 0; i < bookRegistry.length; i++) {
      console.log(`${i + 1}. ${bookRegistry[i]}`); // แสดงรายการหนังสือทั้งหมด
    }
  }
  StartApp(); // กลับไปยังฟังก์ชันเริ่มต้นของแอปพลิเคชัน
}

// Main application function
// ฟังก์ชันหลักของแอปพลิเคชัน
function StartApp() {
  readline.question("What is your command? (register, borrow, list, return, quit) ", (_command) => {
    if (_command === "quit") {
      console.log("Exiting the library application. Bye!"); // ปิดโปรแกรม
      readline.close();
    } else if (_command === "register") {
      RegisterBook(); // เรียกฟังก์ชันลงทะเบียนหนังสือ
    } else if (_command === "borrow") {
      ToggleBorrow(); // เรียกฟังก์ชันเปิด/ปิดโหมดการยืมหนังสือ
    } else if (_command === "list") {
      ListBooks(); // เรียกฟังก์ชันแสดงรายการหนังสือ
    } else if (_command === "return") {
      bookRegistry = []; // ล้างรายการหนังสือทั้งหมด
      console.log("All books have been returned.");
      StartApp(); // กลับไปยังฟังก์ชันเริ่มต้นของแอปพลิเคชัน
    } else {
      console.log("Invalid command. Please try again."); // แจ้งเตือนคำสั่งผิด
      StartApp(); // กลับไปยังฟังก์ชันเริ่มต้นของแอปพลิเคชัน
    }
  });
}

StartApp(); // เรียกใช้ฟังก์ชันเริ่มต้น
