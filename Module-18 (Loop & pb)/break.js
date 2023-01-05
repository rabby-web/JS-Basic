// for (var i = 0; i <= 20; i++) {
//     console.log(i)
//     if (i > 10) {
//         break;
//     }
// }
// var rostGive = 0;
// while (rostGive < 10) {
//     console.log("rostGive")
//     console.log(rostGive)
//     rostGive++;
//     if (rostGive > 4) {
//         break;
//     }
// }
var numbers = [34, 43, 46, 86, 78, 67, 55, 34];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}