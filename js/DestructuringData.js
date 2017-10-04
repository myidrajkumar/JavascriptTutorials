/**
 * De-structuring data from arrays or objects.
 */

(function() {   
    // This is called IIFE ==> Immediately invoked Function Expression.
    
    destructureArrayData();
    console.log("====================================================");
    destructureObjectData();
})();


// Arrays - De-Structuring
function destructureArrayData() {
    
    const actors = ['Rajini', 'Kamal', 'Ajith', 'Vijay'];

    /*
     * Wrapping a variable declaration with square brackets ==> Take the first
     * element from actors and assign it to the variable
     */
    const [firstName] = actors;
    console.log("First Name ==> " + firstName);


    // All elements can be picked individually
    const [firstActor, secondActor, thirdActor, fourthActor] = actors;
    console.log("Actors List by De-structuring ==> { '" + firstActor + "', '" + 
            secondActor + "', '" + 
            thirdActor + "', '" + 
            fourthActor + "' }");

    /*
     * In extraction, if the structure contains less elements, then referred
     * element will be 'undefined'. In our example, names array contains four
     * elements but we will refer 5th element too.
     */
    const [name1, name2, name3, name4, name5] = actors;
    console.log("Not present element is referred ==> { '" + name1 + "', '" + 
            name2 + "', '" + name3 + "', '" + name4 + "', '" + name5  + "' }");


    // Above can be fixed by providing default element.
    const [player1, player2, player3, player4, player5 = "Gowndamany"] = actors;
    console.log("Default element is provided ==> { '" + player1 + "', '" + 
            player2 + "', '" + player3 + "', '" + player4 + "', '" + player5  + "' }");
    
    // Elements can be skipped too.
    const [element1, , element2] = actors;
    console.log("Skipping elements ==> { '" + element1 + "', '" + element2 + " }");
    
    // End elements can be assigned to new array
    const [actor1, ...restActors] = actors; 
    console.log("Assigning end elements to array ==> " + restActors + " and assigned first element => " + actor1);
}


function destructureObjectData() {
    
    const person = {
            name: 'Raj',
            age: 30,
            facts: {
                // these were intended
                hobby: 'Programming',
                work: 'Playing'
            }
    };
    
    const {name, age} = person;
    console.log("Extracted from person object ==> { Name: '" + name + "', Age: '" + age + "' }");
    
    const {name1, facts : {hobby}} = person;
    console.log("Nested value from person object ==> { Name: '" + name1 + "', Hobby: '" + hobby + "' }");
    
    const {name2, hometown = 'Hosur'} = person;
    console.log("Default value from person object when missing==> { Name: '" + name2 + "', Home Town: '" + hometown + "' }");
    
    const simpleFunction = ({name, age}) => {
        return `${name} is ${age} years old`;
    }
    
    console.log("Calling function ==> " + simpleFunction(person));
}



