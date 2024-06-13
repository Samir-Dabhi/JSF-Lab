// 2.	WAP to explore more inbuilt string functions like slice(), 
//      toLowerCase(), toUpperCase(), valueOf(), fromCharCode().

//slice(startIndex,endIndex);

let str = "Hello, World!"
let substring1 = str.slice(7);
console.log(substring1); // Output: "World!"
console.log(str.slice(7, 12)); // Output: "World"

// toLowerCase()

console.log(str.toLowerCase()); // Output: "hello, world!"

// toUpperCase()

console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"

// valueOf()

let strObj = new String("Hello, World!");
console.log(strObj.valueOf()); // Output: "Hello, World!"
// console.log(strObj); // Output: String {'Hello, World!'}

// fromCharCode()

let str1 = String.fromCharCode(72, 101, 108, 108, 111); 
console.log(str1); // Output: "Hello"
