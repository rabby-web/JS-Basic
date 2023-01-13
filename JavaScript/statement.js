// if Statement=================
if(3 < 5){
    console.log('Yeah I will be impress !')
}
//-----------------
var myAge = 20;
if(9 > 10){
    console.log('Good to go');
}
if(myAge >= 20){
    console.log('You are adult!');
}
if(myAge < 20){
    console.log('You are not adult!');
}
//-----------------
var myAges = 21;
if(myAges > 20 && myAges < 60){
    console.log('You are a young person');
}

// if...else Statement=================
var age = 21;
if(age > 18){
    console.log('Now You are Adult');
}
else{
    console.log('No You are not aged enough to be an Adult');
}


// if...else if Statement=================
var whatDay = 'Sunday';
if(whatDay ==='Friday'){
    console.log('It is closed today');
}
else if(whatDay ==='Thursday'){
    console.log('It is partially closed');
}
else if(whatDay === 'Saturday'){
    console.log('Some offices are closed today');
}
else{
    console.log('It normal working day today');
}
//-----------------
var appleLaptopPrice = 120;
var lenovoLaptopPrice = 105;
var hpLaptopPrice = 80;
var dellLaptopPrice = 40;
var myMony = 50;
if(appleLaptopPrice < myMony){
    console.log("Apple Laptop");
}
else if(lenovoLaptopPrice < myMony){
    console.log("Lenovo Laptop");
}
else if(hpLaptopPrice < myMony){
    console.log("HP Laptop");
}
else{
    console.log("Dell Laptop")
}