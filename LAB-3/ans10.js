// 10.	WAP to print sum of first ‘n’ Natural number (sum =1 + 2 + 3+ … +n).
function sumOfN(n) {
    let sum = n*(n+1)/2
    console.log(sum);
    return sum;
}
let n = Number(prompt("Enter number"));
sumOfN(n);