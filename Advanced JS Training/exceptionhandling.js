//exceptionhandling.js
function exampleCode() {
	throw "Apple123";
	throw new customError("OOPs! something went wrong");
}

//custom exception
function customError(msg){
	this.message = msg;
	this.name ="custom Error";	
}
customError.prototype = new Error();
customError.prototype.constructor = customError;

try {
	exampleCode();
} catch(e) {
	// statements
	//console.log(e): for std error messages
	console.log(e.message);
}
/*
Points:
The “try…catch…finally” statement is used to handle exceptions.
The “try” clause identifies code that could potentially generate exceptions.
The “catch” clause is only executed when an exception occurs.
The “finally” clause is always executed, no matter what.
The “throw” statement is used to generate exceptions.
Custom exception objects should inherit from the existing “Error” types.
*/