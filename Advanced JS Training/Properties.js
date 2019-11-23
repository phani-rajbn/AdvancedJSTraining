//Properties.js: LIke Programming languages like C#, U can have properties in JS using get and set blcoks whch allow fields to be used like methods. FProperties will work only when U invoke them, unlike fields which are created automatically whether U use it or not....
class Employee{
	constructor(id, name , salary){
		this.empId = id;
		this.empName = name;
		this.empSalary = salary;
	}

	get empName(){
		return this._name.toUpperCase();
	}
	set empName(value){
		this._name = value;
	}
	get empSalary(){
		return this._salary;
	}
	set empSalary(value){
		this._salary = value;
	}
	get empId(){
		return this._id;
	}
	set empId(value){
		this._id = value;
	}
	
}

var emp = new Employee(123, "Phaniraj", 2300);
console.log(emp.empName);//get accessor
emp.empName ="Apple 123";//set accessor...
console.log(emp.empName);//get accessor
