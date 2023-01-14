const shoppingCard= [
    {name: "shoes", price: 1200, quantity: 2 },
    {name: "shirt", price: 2200, quantity: 3 },
    {name: "pant", price: 1600, quantity: 4 },
    {name: "t-shirt", price: 600, quantity: 3 },
];
function totalCoast(products){
    let sum = 0; 
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productsTotal = product.price * product.quantity;
        sum = sum + productsTotal;
    }
    return sum;
}
const expense = totalCoast(shoppingCard);
console.log(expense)