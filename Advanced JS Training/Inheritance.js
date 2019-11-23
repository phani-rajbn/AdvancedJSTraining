//Inheritance.js
class baseClass{
	addFunc(first, second) {
		return first + second;
	}
}

class derivedClass extends	baseClass{
	subFunc(first, second) {
		return first - second;
	}
	
	static testFunc(){
		console.log("testFunc");
	}
}

derivedClass.field = 123;
function invokeMethods () {
	const cls = new baseClass();
	console.log(cls.addFunc(123, 234));

	const cls2 = new derivedClass();
	console.log(cls2.addFunc(123, 234));
	console.log(cls2.subFunc(123, 234));
	derivedClass.testFunc();
	console.log(derivedClass.field);
	//cls2.testFunc();//Cannot call static methods thro instance variables.	
}

invokeMethods();
