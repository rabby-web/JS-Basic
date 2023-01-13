// Math power----------
const result = Math.pow(5, 8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = num1 - num2;
if( gap < 5){
    console.log("You gays can be a friend");
}
else{
    console.log("you gays stay apart");
}
// Math.round-----------------
const number = 2.5676;
const fullNumber = Math.round(number);
console.log(fullNumber);

// Math ceil------------------
const number1 = 3.02221;
const fullNumber1 = Math.ceil(number1);
console.log(fullNumber1);

// Math floor-----------------
const number2 = 3.92221;
const fullNumber2 = Math.floor(number2);
console.log(fullNumber2);

// Random-----------------
console.log(Math.random());

const random = Math.random()* 100;
console.log(random);

const fullRandom = Math.round(random);
console.log(fullRandom);

for(let i = 0; i < 6; i++){
    const random = Math.random()* 6;
    const fullRandom = Math.round(random);
    console.log(fullRandom);
}