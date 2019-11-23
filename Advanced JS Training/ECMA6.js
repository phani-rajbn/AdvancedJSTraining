//ECMA6.js
/*
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.
*/
function letExample() {
	console.log(fruit);	
	var fruit = "apple";//let replaced with var will give compile error. let is scoped based.
	console.log(fruit);	
}

var templeTown = "Tirumala";

function setTemple(town){
	var templeTown = town;
	console.log(templeTown);
}

setTemple("Srirangam");
console.log(templeTown);
//letExample();
/*
Points:
let gives you the privilege to declare variables that are limited in scope to the block, statement of expression unlike var.
Even if the let variable is defined as same as var variable globally, the let variable will not be added to the global window object.
let variables are usually used when there is a limited use of those variables. Say, in for loops, while loops or inside the scope of if conditions etc.
let variables cannot be re-declared while var variable can be re-declared in the same scope.
let and var variables work the same way when used in a function block.
*/