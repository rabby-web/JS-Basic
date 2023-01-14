// simple sum 
// let sum = 0;
// for(let i = 0; i < 7; i++){
//     sum = sum = i;
//     console.log(sum, i);
// }
// function sum 
function sumOfNumbers(numbers){
    let sum = 0;
    for(let i = 0; i <= numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(sum, element, i);
    }
    return sum;
}
const myNumber = sumOfNumbers(30);
console.log(myNumber);