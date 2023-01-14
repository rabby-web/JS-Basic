// Problem:1 diesel = 114; petrol = 130; octane = 135; oilPrice Calculator
function oilPrice(diesel, petrol, octane){
    const dieselPerLiter = 114;
    const petrolPerLiter = 130;
    const octanePerLiter = 135;

    const dieselPrice = dieselPerLiter * diesel;
    const petrolPrice = petrolPerLiter * petrol;
    const octanePricer = octanePerLiter * octane;

    const totalPrice = dieselPrice + petrolPrice + octanePricer;
    return totalPrice;
}
const ourOilPrice = oilPrice(10, 10, 10);
console.log(ourOilPrice);