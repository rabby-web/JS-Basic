function ticketPrice(ticketQuantity){
    const fast100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * fast100Rate;
        return price;
    }
    if(ticketQuantity <= 200){
        const fast100Price = 100 * fast100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice =fast100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const fast100Price = 100 * fast100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCoast =fast100Price + second100Price + restTicketPrice;
        return totalCoast;
    }
}
const myTicketPrice =ticketPrice(320);
console.log(myTicketPrice);