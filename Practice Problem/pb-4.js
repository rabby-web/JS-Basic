// even or odd number calculator in array
function oddNumber(numbers){
    let oddNum = [];
    let sum = 0;
    for(let i = 0; i <= numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        if(sum % 2 === 1){
            console.log(i, index, sum);
            oddNum.push(element);
        }
    }
    return oddNum;
}
const getOddNumber = [10, 11, 13, 23, 43, 54, 32, 33, 20, 21, 22, 23];
oddNumber(getOddNumber);

// get sum off array
function getSumOfAnArray(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        sum = sum + element;
        console.log(sum);
    }
    return sum;
}
const getSumNumber = [10, 11, 13, 23, 43, 54, 32, 33, 20, 21, 22, 23];
getSumOfAnArray(getSumNumber);

// even odd number
function evenOdd(number){
    const even = number % 2;
    if(even === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumber = evenOdd(400);
console.log(myNumber);