// 11.	WAP to check whether the given n is Armstrong or not.
function isArmstrong(n) {
    const strNum = n.toString();
    const numDigits = strNum.length;
    let sumOfPowers = 0;
    for (let i = 0; i < numDigits ; i++) {
        sumOfPowers += Math.pow(parseInt(strNum[i]), numDigits);
    }
    if (sumOfPowers == n) {
        console.log("number is Armstrong");
    }
    else{
        console.log("number is not Armstrong");
    }
}

let n = parseInt(prompt("Enter number"));
isArmstrong(n);