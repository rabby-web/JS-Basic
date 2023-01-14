 const phones = [
    { name: "Vivo", camera: 12, Storage: "32GB", Price: 30000, color: "Silver"},
    { name: "Oppo", camera: 12, Storage: "32GB", Price: 28000, color: "Silver"},
    { name: "Nokia", camera: 12, Storage: "32GB", Price: 32000, color: "Silver"},
    { name: "Xiamo", camera: 12, Storage: "32GB", Price: 35000, color: "Silver"},
    { name: "Techno", camera: 12, Storage: "32GB", Price: 25000, color: "Silver"},
    { name: "iphone", camera: 12, Storage: "32GB", Price: 30000, color: "Silver"},
 ]
 function cheepPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.Price < cheapest.Price){
            cheapest = phone;
        }
    }
    return cheapest;
 }
 const mySelection = cheepPhone(phones);
 console.log(mySelection);