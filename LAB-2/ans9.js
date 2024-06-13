// 9.	WAP to print prime numbers between the two given numbers.
function primeBetweenTwoNumbers(m,n) {
    for (let i = m; i < n; i++){
        let isPrime = true;
        for (let j = 2 ; j < i ; j++) {
            if (i%j==0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
let m = Number(prompt("Enter number 1"));
let n = Number(prompt("Enter number 2"));
primeBetweenTwoNumbers(m,n);