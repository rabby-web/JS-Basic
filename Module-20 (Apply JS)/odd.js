function getSumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        //     console.log(index, element, sum)
    }
    return sum;
}
function getOddNumbers(number) {
    getOddNumbers = [];
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index]
        if (element % 2 !== 0) {
            console.log(index, element)
        }

    }
}



const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getOddNumbers(myNumbers)
getSumArray(myNumbers)