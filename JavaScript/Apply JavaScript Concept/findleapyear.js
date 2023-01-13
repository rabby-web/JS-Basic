function findLeapYear(leapYear){
    const findYear = [];
    for(let i = 0; i < leapYear. length; i++){
        const index = i;
        const element = leapYear[index];
        if(element % 4 === 0){
            console.log(index, element)
        }
        findYear.push(leapYear);
    }
    return findYear;


}
const year =[2023, 2024, 2025, 2028, 2030];
findLeapYear(year);
