function kmToMil(km) {
    const mile = km / 1.67;
    return mile;
}
var kmMile = 20;
var kmM = kmToMil(kmMile);
console.log(kmM)