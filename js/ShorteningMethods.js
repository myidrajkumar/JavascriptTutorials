/**
 * Shortening Methods Example.
 */

let person = {
	
		getName: function() {
			return "Raj";
		},

		getAge : function() {
			return 30;
		}

};

console.log("Old Approach =>  { Name:  " + person.getName() + ", Age: " + person.getAge() + "}");

/* Above can be shortened with the following approach in ES6
 * Is this approach has to be applied to only for objects?  What is the best practice??
 */

let human = {
	getName() {
		return "Raj";
	},
	
	getAge() {
		return 30;
	}
};
console.log("New Approach =>  { Name:  " + human.getName() + ", Age: " + human.getAge() + "}");
