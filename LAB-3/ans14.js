// 14.	WAP to print LCM of two numbers.

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const number1 = parseInt(prompt("Enter the first number: "), 10);
const number2 = parseInt(prompt("Enter the second number: "), 10);
const result = lcm(number1, number2);

console.log("The LCM of "+number1 +" and "+number2+" is "+result);
