// Object literal: name/value pairs seperated by commas and surrounded by curly braces (this is a quick, shorthand way to create JavaScript objects in code)
// for example:

// create a name/value person pair
// fill the curly braces with a name/value pair seperated
// add a greeting message as a function
// the message function use the output method as Hello + first.name + last.name
// call the message
// I also can asset the message without using the person.greet() instead I use bracets with the firstname string inside the braces



var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();						// Hello, John Doe

console.log(person['firstname']);	// John