const userName = "Hello";
console.log(userName.toLowerCase());
const userInput = "Hello";
console.log(userInput.toUpperCase());
if(userInput.toUpperCase() !== userName.toLowerCase()){
    console.log("Valid Users");
}
else{
    console.log("Invalid Users");
}