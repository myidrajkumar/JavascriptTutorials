/**
 * Spread Syntax Example.
 */

const names = ['Raj', 'Kumar', 'Rajini'];
console.log("Names Array ==> " + names);

//To copy entire array to another array in ES6
const duplicateNames = [...names];
console.log("Copied Names Array ==> " + duplicateNames);


names[0] = 'Kamal';
duplicateNames[1] = 'Ajith';

console.log("After changing different element in both arrays, \n" + 
        "Names Array ==> " + names + "\n"
        +"Copied Names Array ==> " + duplicateNames);

//concatenation
const concatenatedNames = [...names, ...names];
console.log("Concatenated Names Array ==> " + concatenatedNames);

//Merges with existing array
const asFirst = [...names, "next"];
console.log("Prepended Names Array ==> " + asFirst);

const asLast = ["first", ...names];
console.log("Appended Names Array ==> " + asLast);

//In function calls
const firstTwoNames = (name1, name2) => {
    console.log("First 2 Names in Appened Array ==> ['" + name1 + "', '" + name2 + "']");
}

//Note that if too many arguments present, then extra arguments will be omitted
firstTwoNames(...asLast);