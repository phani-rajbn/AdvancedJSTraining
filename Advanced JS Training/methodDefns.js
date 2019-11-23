//methodDefns.js
/*var obj = {
	foo(){
		return ("foo");
	}
}

var customer ={
	get name(){
		return 
	}
}
console.log(obj.foo());
///////////default parameters in JS///////////////
function temp(arg){
	if(arg != undefined)
		console.log(arg);
	else
		console.log("arg value is not set");
}
temp();
temp("some arg");

function addFunc(first = 123, second = 345){
	return first + second;
}

console.log(addFunc())


function date(d = today()) {
    console.log(d);
}

function today(){
	return (new Date()).toLocaleDateString("en-IN");
}
date();*/
/////////////////////REST Parameters in JS///////////////////////
/*function add(...values){
	var res = 0.0;
	values.forEach((value, ind)=>{
		res += value
	})
	return res;
}
console.log(add(123,34,345,234,234,345,456,456,665))
//Points: The rest parameters should be the last of the paremeter list. There can be only one rest parameter in the list of the parameters of the function. the rest parameter gives an array in return and we can make use of all the array methods provided by javascript.

function interPolation(argument) {
 	console.log(`${argument}`);
 } 

 interPolation("Aplle123")*/
 ////////////////////getters and setters////////////////////////////
class book{
	constructor(id, title, price){
		this.id = id;
		this.title = title;
		this.price = price;
	}

	get title(){
		return this._title;
	}
	set title(value){
		this._title = value;
	}
	get id(){
		return this._id;
	}
	set id(value){
		this._id = value;
	}
	get price(){
		return this._price;
	}
	set price(value){
		this._price = value;
	}
	
}

var bk = new book(123, "Pro JS", 450);
bk.title ="Inside COM"
console.log(bk.title)

/*An additional optimization technique to lazify or delay the calculation of a property value and cache it for later access are smart or memoized getters. The value is calculated the first time the getter is called and is then cached so subsequent accesses return the cached value without recalculating it. This is useful in the following situations:

If the calculation of a property value is expensive (takes much RAM or CPU time, spawns worker thread, retrieves remote file, etc).
If the value isn't needed just now. It will be used later, or in some case it's not used at all.
If it's used, it will be accessed several times, and there is no need to re-calculate that value will never be changed or shouldn't be re-calculated: you shouldn't use a lazy getter for a property whose value you expect to change, because the getter will not recalculate the value. 
*/

class Ab{
    constructor(){
        console.log("object is created");
    }

    get name(){ return this._name }
    set name(value){ this._name = value }
}

var val = new Ab("Apple");
val.name ="Mango";
console.log(val)