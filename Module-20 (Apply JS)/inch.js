function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var dadaInches = 144;
var dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

var nanaIndch = 60;
var nanaFeet = inchToFeet(nanaIndch);
console.log(nanaFeet)