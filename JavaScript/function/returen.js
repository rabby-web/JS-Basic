// Fast Example ----------------
function buyApple(money){
    var applePrice = 30;
    var quantity = money / applePrice;
    return quantity;
}
var apple = buyApple(600);
console.log("Apple:", apple);

// Second Example -------------------
function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}
var total = add(300, 700);
console.log("Total:",total);

// Third Example -------------------
function assignmentMarks (assignment1, assignment2, assignment3){
    console.log(assignment1, assignment2, assignment3);
    var totalMarks = assignment1 + assignment2 + assignment3;
    var averageAssignmentMarks = totalMarks / 3;
    return averageAssignmentMarks;  
}
var assignment1Marks = 60;
var assignment2Marks = 58;
var assignment3Marks = 60;

var myAverage = assignmentMarks(assignment1Marks, assignment2Marks, assignment3Marks);
console.log("Get my average marks:", myAverage);
