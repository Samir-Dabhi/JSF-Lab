// 1.	WAP to demonstrate the use of various inbuilt string functions like 
// charAt(), charCodeAt(), startsWith(), endsWith(), includes(), indexOf(), 
// lastIndexOf(), match(), repeat(), replace("", ""), search(), split(), 
// substr(start, length), substring(start, end), toString(), trim().

// charAt() function

let str = "Hello, World!";
let charAt7 = str.charAt(7); 
let charAt0 = str.charAt(0); 
let charAt20 = str.charAt(20); 

console.log("Character at index 7:", charAt7); // W
console.log("Character at index 0:", charAt0); // H
console.log("Character at index 20 :", charAt20); // ?

// charCodeAt() function

let codeAt7 = str.charCodeAt(7);  
let codeAt0 = str.charCodeAt(0); 
let codeAt20 = str.charCodeAt(20); 

console.log("Unicode value at index 7:", codeAt7); 
console.log("Unicode value at index 0:", codeAt0); 
console.log("Unicode value at index 20 (out of range):", codeAt20);

// startsWith()

console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("World")); // Output: false
console.log(str.startsWith("World", 7));

// endsWith()

console.log(str.endsWith("World!")); // Output: true
console.log(str.endsWith("Hello")); // Output: false

//includes()

console.log(str.includes("World")); // Output: true
console.log(str.includes("world")); // Output: false
console.log(str.includes("World", 8)); // Output: false
console.log(str.includes("!", 10)); // Output: true

// indexOf()

console.log(str.indexOf("World")); // Output: 7
console.log(str.indexOf("o", 5)); // Output: 8
console.log(str.indexOf("Python")); // Output: -1

// lastIndexOf()

console.log(str.lastIndexOf("World")); // Output: 7
console.log(str.lastIndexOf("o", 5)); // Output: 4
console.log(str.lastIndexOf("Python")); // Output: -1

// match()

console.log(str.match("l"));
console.log(str.match(/o/g)); // Output: ["o", "o",]
console.log(str.match(/Python/)); // Output: null

// repeat()

let line = "*".repeat(20);
console.log(line);

// replace() 

let replacedStr = str.replace("o", "x");
console.log(replacedStr); // Output: "Hellx, World!"

replacedStr = str.replace(/o/g, "x");
console.log(replacedStr); // Output: "Hellx, Wxrld!"

//search()

console.log(str.search("World")); // Output: 7

//spllit()

let words = str.split(" ");
console.log(words); // Output: ["Hello,","World!"]
console.log(str.split("")); // Output: ["H","e","l","l","o", "," ," ","W","o","r","l","d"]

// substr(startIndex, length)

console.log(str.substr(7));
console.log(str.substr(7,3));

// substring(startIndex,endIndex)

console.log(str.substring(7)); // Output: World!
console.log(str.substring(7, 12)); // Output: World

// toString() 

let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };

console.log(num.toString()); // Output: "42"
console.log(bool.toString()); // Output: "true"
console.log(arr.toString()); // Output: "1,2,3"
console.log(obj.toString()); // Output: "[object Object]"
console.log("Hello, World!".toString()); // Output: "Hello, World!"

// trim()

let newstr = "   Hello, World!   ";

let trimmedStr = newstr.trim();
console.log(trimmedStr); // Output: "Hello, World!"