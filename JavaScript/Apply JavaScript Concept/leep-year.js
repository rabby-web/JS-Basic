function leapYear(year){
    const leap = year % 4;
    if(leap === 0){
        console.log("This is a leap Year:",true);
        // return true; 
    }
    else{
        console.log("This is not a leap Year:", false);
        // return false;
    }
}
leapYear(2022);
// const myBorn =leapYear(2004);
// console.log(myBorn); 