function evenOdd(number){
    const evenOddNumber = number % 2;
    if(evenOddNumber === 0){
        // console.log(true);
        return true;
    }
    else{
        // console.log(false);
        return false;
    }
    // return evenOddNumber;
}
// evenOdd(501);
const number = evenOdd(21);
console.log(number);
