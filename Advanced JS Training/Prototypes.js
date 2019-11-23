//Prototypes.js
//Each object has a private property which holds a link to another object called its prototype. Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.
function temp(){
	this.name ="Phani";
	this.gender = "male";
}

temp.prototype.age =  45;
var t1 = new temp();

t1.age = 43;
console.log(t1.age);

var t2 = new temp();
console.log(t2.age);//t2 does not have age property set only to the object t1.

//what should we do if we want to add new properties at later stage to a function which will be shared across all the instances? The answer is Prototype. The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.
console.log(t1.__proto__== temp.prototype)
//__proto__ is the reference of the class's prototype object.

