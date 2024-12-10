const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasksManagement = {
  personal: 0, // งานส่วนตัว
  work: 0, // งานที่เกี่ยวกับการทำงาน
  urgent: 0, // งานด่วนที่ต้องทำก่อน
  completed: 0, // งานที่ทำเสร็จแล้ว
  archived: 0, // งานที่เก็บเข้าแฟ้มเอกสาร
};

// Function to display the number of tasks in each category
// ฟังก์ชันสำหรับแสดงจำนวนงานในแต่ละประเภท
function DisplayTasksNumbers() {
  // Loop through the tasks and log all the categories and their corresponding numbers
  // วนลูปแสดงผลประเภทงานและจำนวนงานที่มี
  for (let key in tasksManagement) {
    console.log("The task category", key, "has", tasksManagement[key], "tasks");
  }
}

// Function to add a task to the specified category
// ฟังก์ชันสำหรับเพิ่มงานในประเภทที่กำหนด
function AddTask() {
  // Add the number to the correct category by capturing the readline
  // เพิ่มจำนวนงานในประเภทที่กำหนดโดยรับอินพุตจากผู้ใช้
  readline.question("What is the category? ", (_category) => {
    let checkCategory = false;

    // ตรวจสอบว่าหมวดหมู่งานนั้นมีอยู่ในระบบหรือไม่
    for (let key in tasksManagement) {
      if (key === _category) {
        checkCategory = true;
        break; // Exit the loop early if the category is found
        // ออกจากลูปทันทีหากพบหมวดหมู่ที่ตรงกัน
      }
    }

    if (checkCategory === true) {
      tasksManagement[_category]++;
      console.log(`Task added to category "${_category}".`);
      // เพิ่มจำนวนงานในหมวดหมู่และแสดงข้อความแจ้ง
    } else {
      console.log(`Invalid category. Please choose from: ${Object.keys(tasksManagement).join(", ")}`);
      // หากหมวดหมู่ไม่ถูกต้อง ให้แจ้งเตือนผู้ใช้
    }

    StartApp(); // Call StartApp after adding a task
    // เรียก StartApp หลังจากเพิ่มงานเสร็จ
  });
}

// Function to summarize the total number of tasks and assign a workload status
// ฟังก์ชันสรุปจำนวนงานทั้งหมดและกำหนดสถานะของปริมาณงาน
function TaskSummary() {
  let total = 0;
  for (let key in tasksManagement) {
    // Add numbers together to total
    // รวมจำนวนงานทั้งหมดในทุกหมวดหมู่
    total += tasksManagement[key];
  }

  // Determine workload status based on total tasks
  // กำหนดสถานะปริมาณงานตามจำนวนงานทั้งหมด
  let status;
  if (total < 5) {
    status = "light workload"; // งานน้อย
  } else if (total >= 5 && total <= 15) {
    status = "moderate workload"; // งานปานกลาง
  } else if (total > 15 && total <= 25) {
    status = "heavy workload"; // งานหนัก
  } else {
    status = "overloaded"; // งานเกินพิกัด
  }

  console.log(`Total tasks: ${total}. Status: ${status}`);
}

// Main application function
// ฟังก์ชันหลักของแอปพลิเคชัน
function StartApp() {
  readline.question("What is your command? ", (_command) => {
    if (_command === "quit") {
      console.log("Exiting the task management application. Bye!");
      // ออกจากโปรแกรมจัดการงาน
      readline.close();
    } else if (_command === "add task") {
      AddTask();
      // เพิ่มงาน
    } else if (_command === "tasks") {
      DisplayTasksNumbers();
      // แสดงจำนวนงานในแต่ละหมวดหมู่
      TaskSummary(); // Call TaskSummary after displaying tasks
      // สรุปจำนวนงานทั้งหมด
    } else {
      console.log("Invalid command. Please try again.");
      // หากคำสั่งไม่ถูกต้อง ให้แจ้งผู้ใช้
      StartApp(); // Call StartApp for invalid commands
      // เรียก StartApp ใหม่เพื่อรอรับคำสั่ง
    }
  });
}

StartApp(); // เริ่มแอปพลิเคชัน
