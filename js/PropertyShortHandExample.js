/**
 * Property Shorthand Example.
 * 
 * The property shorthand is all about removing duplications.
 */


const name = "Raj";
const age = 24;

/* To assign these variables to object properties with identical namings, 
 * we have repeated it both for the property to give the name and the value to refer to our variable
 */
let person = {
		name : name,
		age : age
};

console.log("Global scope => { Name : " + name + ",  Age : "+ age + "}");
console.log("Person object property => { Name : " + person.name + ",  Age : "+ person.age + "}");

/* With ES6. the above approach can be avoided */

let human = {
		name,
		age
}

/* JavaScript understands that you want to take the value name and assign it to a property with the same name as the variable.
 * This is called 'Property Shorthand'
 */
console.log("Human object property => { Name : " + human.name + ",  Age : "+ human.age + "}");