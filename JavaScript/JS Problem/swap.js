// Fast Example--------
let fast = 10;
let second = 20;
console.log(fast, second);
const temp = fast;
fast = second;
second = temp;
console.log(fast, second);

// Second Example------------
let a1 = 100;
let a2 = 200;
[a1, a2] = [ a2, a1];
console.log(a1, a2); 