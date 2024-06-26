// 13.	WAP to print the GCD of two number.
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage
const number1 = parseInt(prompt("Enter the first number: "));
const number2 = parseInt(prompt("Enter the second number: "));
const result = gcd(number1, number2);

console.log("The GCD of "+number1+" and "+number2+" is "+result);