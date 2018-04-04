/**
 * ECMAScript 2017 Examples.
 */

// Object.values() returns all the values of the Object’s own properties
// excluding any value(s) in the prototypical chain
const objectValues = () =>  {
    
    const cars = {BMW:1, Toyota:2, Telsa:3};
    // To get values
    // In ES2015
    console.log("Values through 'Object.keys' ==> ",Object.keys(cars).map(key => cars[key]));
    
    // In ES2017
    console.log("Values through 'Object.values' ==> ",Object.values(cars));
}


const objectEntries = () => {
    
    const cars = {BMW:1, Toyota:2, Telsa:3};
    
    for(let [key, value] of Object.entries(cars)) {
        console.log(`Key : ${key}, Value : ${value} \n`)
    }
}


(function() {   
    
    objectValues();
    console.log("====================================================");
    objectEntries();
})();





