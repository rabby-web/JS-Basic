function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        console.log(i, result)
    }
    return result;
}
// const fact = factorial(9);
// console.log(fact)
const number = 9;
const fact = factorial(number);
console.log("factorial of:", number, fact)