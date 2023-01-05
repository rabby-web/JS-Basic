// function sumOfNumber(number) {
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//         sum = sum + i;
//         console.log(i, sum)
//     }
//     return sum;
// }
// const sum = sumOfNumber(7);
// console.log(sumOfNumber)

function sumOfNumber(number) {
    let result = 1;
    for (let i = 1; i <= 9; i++) {
        result = result * i;
        console.log(i, result)
    }
    return result;
}
const result = sumOfNumber(7);
console.log(sumOfNumber)