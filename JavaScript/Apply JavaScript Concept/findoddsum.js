function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers. length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumbers = [10, 11, 12, 13, 14, 15, 16, 17, 18];
getSumOfAnArray(myNumbers);