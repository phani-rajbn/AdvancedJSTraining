//older Class syntax....
function temp(name, age){
	this.name = name;
	this.age = age;
}
//Each object in js has an internal reference to another object, its base version by a property called Prototype.  The object refers to its prototype using a field called __proto__. Every class or the type refers to its prototype using a static property called prototype
//The main purpose of prototype inheritance was to add new properties at the later stages after the object is deployed into the App and wish to add an extra feature that needs to be shared by all the instances.  The prototype object is sp. type of enumerable object to which new properties and methods scould be added which would be shared across the instances of the class. 
//Members added to the portotype will not be the part of the object notation...

//object created out of it....
temp.prototype.jobDesc ="Trainer in JS";
var phani = new temp('Phani', 43);
phani.jobDesc = "Trainer in JS";//It added the property to an object

console.log(temp.prototype == phani.__proto__);//true...
var banu = new temp('Banu', 49);
banu.jobDesc ="Trainer in Java";
console.log(`${phani.name} is ${phani.jobDesc}`);
console.log(`${banu.name} is ${banu.jobDesc}`);
console.log(phani);
console.log(banu);
///////////////////////New Inheritance Syntax in ES6/////////////////

class baseClass{
	addFunc(first, second){
		return first + second;
	}

	static baseMethod(){
		console.log("base method");
	}
}
//extends keyword is used to extend a class in JS...
class derivedClass extends baseClass{
	subFunc(first, second){
		return first- second;
	}

	static staticfunc(){
		//Singleton methods invoked by the name of the class rather than the instance of it. It is compile error to invoke a static method by its instance...
		console.log("Static method in derived class");
	}
}
function invokemethods() {
	var obj = new derivedClass();
	console.log(obj.addFunc(123, 234));
	console.log(obj.subFunc(123,23));
	//obj.staticfunc();compiler error....
	derivedClass.staticfunc();//Single reference across the program. No need for object creation, use static methods for utility methods. Unlike other OOP languages, static methods are the part of the inheritance in JS.... 
	derivedClass.baseMethod();
}
invokemethods();
