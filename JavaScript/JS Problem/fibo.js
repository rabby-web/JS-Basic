const fib = [0, 1];
for (let i = 2; i <= 25; i++){
    fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib);