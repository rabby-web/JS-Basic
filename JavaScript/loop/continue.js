// Fast Example-----------
for (var i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log("It is now at: " + i);
}
// Second Example---------------
var rostGive = 0;
while (rostGive < 10) {
    console.log("rostGive")
    console.log(rostGive)
    rostGive++;
    if (rostGive > 4) {
        continue;
    }
}