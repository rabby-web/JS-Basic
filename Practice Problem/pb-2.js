// leap year
function leapYear(year){
    const leap = year % 4;
    if(leap === 0){
        console.log("The Year Is Leap Year");
    }
    else {
        console.log("The Year Is Not a Leap Year")
    }
}
leapYear(2004);
// second example leap year
function leapYear2(year2){
    const leap2 = year2 % 2;
    if(leap2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const myYear = leapYear2(2005);
console.log(myYear);