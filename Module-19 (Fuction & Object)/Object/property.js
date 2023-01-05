var shopingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}
// When you know the property name,use dode notation
varCount = shopingCard.pen;
// alternative system
// When you know the property name , use dode notation
var penCount2 = shopingCard["books"];

var properties = Object.keys(shopingCard)

var propertyValues = Object.values(shopingCard)

var propertyName = shopingCard[propertyName];
shopingCard["mouse"] = 30;
console.log(propertyName)
console.log(propertyValues)
console.log(properties)
console.log(shopingCard)