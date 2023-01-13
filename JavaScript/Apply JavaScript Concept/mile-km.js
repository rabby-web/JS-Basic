function mileKM(KM){
    const mileToKm =KM * 1.60934;
    return mileToKm;
}
const schoolDistance = 10;
const schoolDistanceToKm = mileKM(schoolDistance);
console.log(schoolDistanceToKm);