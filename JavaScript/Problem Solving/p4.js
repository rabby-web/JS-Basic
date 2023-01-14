function publicBusFare(people){
    const busCapacity = 50;
    const microCapacity = 11;
    const ticketPrice = 250;
    
    let peopleGoingToBUs = people % busCapacity;
    let peopleGoingToMicro = people % microCapacity;
    let publicBusTicketPrice = peopleGoingToMicro * ticketPrice;
    return publicBusTicketPrice;
};
const amount = publicBusFare(250);
console.log(amount);
