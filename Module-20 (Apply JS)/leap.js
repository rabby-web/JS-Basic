function leapYear(year) {
    const remainder = year % 4;
    // if (remainder === 0) {
    //     console.log("Your year is a leap year")
    // }
    // else {
    //     console.log("Your year is not a leap year")
    // }
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }

}
// leapYear(1952)
const isLeapYear = leapYear(1952)
console.log(leapYear)