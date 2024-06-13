// 3.	WAP to create an array of countries, read values of an array 
//      from user and print it.

// Define an empty array to store countries
let countries = [];

// Function to read values of an array from the user
function readArrayValues() {
    let input = prompt("Enter a country name (or 'done' to finish):");
    while (input !== "done") {
        countries.push(input);
        input = prompt("Enter another country name (or 'done' to finish):");
    }
}

// Function to print the array of countries
function printCountries() {
    console.log("List of countries:");
    for (i=0;i<countries.length;i++) {
        console.log(countries[i]);
    }
}

// Call the function to read values of the array from the user
readArrayValues();

// Call the function to print the array of countries
printCountries();