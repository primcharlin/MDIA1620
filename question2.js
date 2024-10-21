const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.
  
  - If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
  - If the score is between 72 and 85, display "Great job! [Student Name] has a B."
  - If the score is between 62 and 72, display "Good effort! [Student Name] has a C."
  - If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
  - If the score is below 50, display "Fail. [Student Name] has a F."
  
  CHALLENGE (SAVE FOR LAST):
  - If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
    -For example, 48 would give you "Almost there! [Student Name] is close to a D."
  - If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
    -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
  */
  
  //create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.
  //if score is >=86 tell them "Excellent![Student Name] has an A"
  //if score is 72-85 tell them "Great job![Student Name] has a B"
  //if score is 62-72 tell them "Good effort![Student Name] has an C"
  //if score is 50-60 tell them "Needs improvement [Student Name] has an D"
  //if score is <50 tell them "Fail [Student Name] has a F"
  
  //determine a proper function name and parameter variable name
  
  
    function CheckExamGrading(StudentName, StudentScore){
  
        let name = StudentName;
        let score = StudentScore;

    //write your code here
if (score >= 86){
    console.log("Excerllent! ${name} got an A");
}else if(score >=72 && score <= 85){
    console.log("Great job! ${name} has a B");
}else if (score >= 62 && score <= 72){
    console.log("Good effort! ${name} has a C");
}else if (score >= 50 && score <= 60){
    console.log("Needs improvement ${name} has an D");
}else if (score < 50){
    console.log("Fail ${name} has a F");
}

    }
  
  
  function StartApp(){
    readline.question('What is your name?', StudentName => {
      readline.question('What is your score?', StudentScore => {
  
        //call your function here.
        CheckExamGrading(StudentName, StudentScore);
  
        // readline.close();
        if(StudentScore !== "quit"){
          StartApp();
        } else {
          readline.close();
        }
      });
    });
  }
  
  StartApp();