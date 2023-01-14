const shoppingCard= [
    {name: "shoes", price: 1200},
    {name: "shirt", price: 2200},
    {name: "pant", price: 1600},
    {name: "t-shirt", price: 600},
];
function totalCoast(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}
const expense = totalCoast(shoppingCard);
console.log(expense)