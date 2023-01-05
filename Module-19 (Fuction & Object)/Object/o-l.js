var shopingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}
const keys = Object.keys(shopingCard);
console.log(keys);
const values = Object.values(shopingCard);
console.log(values);
for (var propertyName in shopingCard) {
    const values = shopingCard[propertyName]
    console.log(propertyName, values)
}