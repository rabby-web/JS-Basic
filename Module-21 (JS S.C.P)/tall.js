function maxArray(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}
const height = [167, 190, 120, 165, 137, 555];
const tallest = maxArray(height);
console.log("Tallest Person is", tallest)