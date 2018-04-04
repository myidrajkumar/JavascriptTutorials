/**
 * ECMAScript 2016 Examples.
 */

// Instead of using 'indexOf', we can use 'includes'
const arrayIncludesExample = () =>  {
    
    const numbers = [1, 2, 3, 4, NaN];
    console.log("Is the array contains 3 ==> ", numbers.includes(3));
    
    console.log("Is the array contains NaN ==> ", numbers.includes(NaN));
    // With 'indexOf', the 'NaN' will not work. Even the array contains 'NaN',
    // index will be returned as -1.
    console.log("NaN index in array ==> ", numbers.indexOf(NaN));
}


const exponentiationInFix = () => {
    
    // This is used to find out power.
    
    // Instead of using Math power function, use the infix
    console.log("Using Math.pow ==> ", Math.pow(7,2));
    
    console.log("Using exponentiation infix operator ==> ", 7 ** 2);
}


(function() {   
    
    arrayIncludesExample();
    console.log("====================================================");
    exponentiationInFix();
})();





