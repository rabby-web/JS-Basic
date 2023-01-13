 var shoppingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}
// When you know the property name,use dode notation
varCount = shoppingCard.pen;
// alternative system
// When you know the property name , use dode notation
var penCount2 = shoppingCard["books"];

var properties = Object.keys(shoppingCard)

var propertyValues = Object.values(shoppingCard)

var propertyName = shoppingCard[propertyName];
shoppingCard["mouse"] = 30;
console.log(propertyName)
console.log(propertyValues)
console.log(properties)
console.log(shoppingCard)