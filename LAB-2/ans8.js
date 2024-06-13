// 8.	WAP to check whether the given number is palindrome or not.
function isPalindrome(n) {
    let reverse = n.split('').reverse().join('');
    if (n==reverse) {
        console.log("no is palindrome");
    }
    else{
        console.log("no is not palindrome");
    }
}

let n = prompt("Enter number");
isPalindrome(n);