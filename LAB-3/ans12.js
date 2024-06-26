// 12.	WAP to print the factors of given number.

function printFactors(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
}

// Example usage
const number = parseInt(prompt("Enter a number: "));
printFactors(number);