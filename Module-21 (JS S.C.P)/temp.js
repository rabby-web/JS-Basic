let fast = 10;
let second = 20;
console.log(fast, second)
const temp = fast;
fast = second
second = temp
// [fast, second] = [second, fast]
console.log(fast, second)
