const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
if( userName.toLowerCase() == userInput.toUpperCase()){
    console.log("Valid User");
}
else{
    console.log("Invalid User");
}