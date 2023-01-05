function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder)
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumber = isEven(300);
console.log(myNumber)
const youNumber = isEven(411)
console.log(youNumber)