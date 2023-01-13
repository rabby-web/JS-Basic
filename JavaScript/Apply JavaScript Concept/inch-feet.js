function inchFeet(inch){
    const feet = inch / 12;
    return feet;
}
var myFeet =inchFeet(144);
console.log(myFeet);

var dadaFeet = inchFeet(60);
console.log("Dada Feet:",dadaFeet);

const tableInch = 156;
const tableFeet =inchFeet(tableInch);
console.log("Table:",tableFeet);