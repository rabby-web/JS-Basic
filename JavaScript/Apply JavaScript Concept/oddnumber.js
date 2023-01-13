function oddNumber(numbers){
    const oddNum = [];
    let sum = 0;
    for(let i = 0; i < numbers. length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        if(element % 2 === 1){
            console.log(index, element, sum);
            oddNum.push(element);
        }  
    }
    return oddNum;
}
const myNumbers = [123, 432, 543, 645, 234, 456, 789, 321, 353];
oddNumber(myNumbers);