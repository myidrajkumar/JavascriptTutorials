/**
 * Map / Reduce / Filter Examples.
 */

const mapExample = () => {
    
    //1. Value Doubling
    console.log("Doubling the array values");

    const myArray = [1, 2, 3, 4];
    console.log('Initial Array => ', myArray);
    
    const doubledArray = myArray.map((value, index, array) => {
        return value * 2;
    });
    console.log('After Doubling Array => ', doubledArray);
    
    console.log("====================================================");
    
    //2. Transforming 
    console.log("Transforming objects array to string array");
    const songs = [
        {id: 1, name: 'Curl of Burl', artis: 'Mastodan'},
        {id: 2, name: 'Oblivion', artis: 'Mastodan'},
        {id: 3, name: 'Flying whales', artis: 'Gojira'},
        {id: 4, name: 'Enfant Sauvage', artis: 'Gojira'}
    ];
    console.log('Initial Object Array => ', songs);
    
    const songNames = songs.map(value => value.name);
    console.log('Just song names => ', songNames);
    console.log("====================================================");
   
    console.log('Lowering song name by utility function');
    const lowerNameFunc = song => song.name.toLowerCase();
    console.log('Lowercase song names => ', songs.map(lowerNameFunc));
    console.log("====================================================");
    
    console.log('Adding and Removing Property');
    const modified = songs.map(song => {
       const {artist, ...rest} = song;
       
       return {
           ...rest,
           scrollableCount: 0,
           another: 'Just Another Property'
       };
    });
    
    console.log('Modified => ', modified);
};


const filterExample = () => {
    /*
     * Filter receives the same arguments as map, and works very similarly. 
     * The only difference is that the callback needs to return either true or false.
     * If it returns true then the array keeps that element
     * and if it returns false the element is filtered out
     */
    
    const numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log('Even Numbers => ', evenNumbers);
};

const reduceExample = () => {
    /*
     * It is similar to both map and filter but, it differs in the callback arguments. 
     * The callback now receives the accumulator 
     * (it accumulates all the return values. Its value is the accumulation of the previous returned accumulations), 
     * the current value, the current index and finally the whole array.
     */
    
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((accumulator, currValue, currentIndex, array)=> {
        return accumulator + currValue;
    }, 0);
    console.log('Sum => ', sum);
};

(function() {   
    // This is called IIFE ==> Immediately invoked Function Expression.
    
    mapExample();
    console.log("====================================================");
    
    filterExample();
    console.log("====================================================");
    
    reduceExample();
})();


