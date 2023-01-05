function getAverage(assinment1, assinment2, assinment3) {
    var total = assinment1 + assinment2 + assinment3;
    var average = total / 3;
    return average;
}
var assinment1Markes = 60;
var assinment2Markes = 59;
var assinment3Markes = 60;

var myAverage = getAverage(assinment1Markes, assinment2Markes, assinment3Markes);
console.log("My Average Markes", myAverage)
