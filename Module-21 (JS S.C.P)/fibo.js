// fibo[i] = fibo[n-1] fibo[n-2]
const fibo = [0, 1]
for (let i = 2; i <= 30; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo)