//ClassesDemo.js
//Creating a class using Anonymous function...
var emp = function(id, name, address){
	id = id;
	name = name;
	address = address;
	//without using this operator...
	return {
		id,
		name,
		address
	}
}


//Creating a class using named function...
function employee(id, name, address){
	this.eId = id;
	this.eName = name;
	this.eAddress = address;
}
//functional objects will be hoisted by JS, which means that U can write UR object creation code above the function definition. 
var temp = new employee(123, "Phaniraj", "Bangalore");
console.log(temp);

//But in a class definition, you first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:
class customer{
	constructor(id, name, amount){
		this.id = id;
		this.name = name;
		this.amount = amount;
	}
}
//var temp = new emp(123, "Phaniraj", "Bangalore");

var cst =new customer(123, "Phaniraj", "Bangalore");
console.log(cst)

/*
Points to remember:
The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.
*/

