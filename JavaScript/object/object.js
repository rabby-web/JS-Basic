// Fast Example---------------
var myComputer = {
    brand: "HP",
    color: "Silver",
    processor: "Intel",
    price: 57000,
}
console.log(myComputer);
console.log(myComputer.price);

// Second Example--------------
var shoppingCard = {
    pen: 5,
    bag: 2,
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
}
const keys =Object.keys(shoppingCard);
console.log(keys);
const values =Object.values(shoppingCard);
console.log(values);

// for (var propertyName in shoppingCard) {
//     const values = shoppingCard[propertyName]
//     console.log(propertyName, values)
// }
var propertyName = shoppingCard[propertyName];
shoppingCard["mouse"] = 30;
console.log(shoppingCard)