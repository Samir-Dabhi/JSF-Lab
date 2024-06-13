// 7.	WAP to check whether the given number is prime or not.

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n%i==0) {
            console.log("not prime");
            return false;
        }
    }
    console.log("prime");
    return true;
}
let n = Number(prompt("Enter number"));
isPrime(n);