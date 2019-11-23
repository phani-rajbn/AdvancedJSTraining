//IFFY.js: Immediately Invoked Function Expression (IIFE) is one of the most popular design patterns in JavaScript. It pronounces like iify. Earlier called as self-executing Anonymous methods, later professionally called as Immediately Invoked Function Expression. 
var cart = (function(){
	var shop = [];
	function addToCart(item){
		shop.push(item);
	}
	function getAll(){
		return shop;
	}
	return{
		add : addToCart,
		getAll : getAll
	}
})();


var demo = cart;
demo.add({"id":123, "name":"Samsung Note3", "price": 450});
demo.add({"id":124, "name":"Redmi Note3", "price": 350});
demo.add({"id":125, "name":"Nokia 1100", "price": 250});

function display(arg){
	arg.forEach((value, index)=>{
		console.log(value.name);
	})
}
//console.log(demo.getAll());
display(demo.getAll());
/*
Do not create unnecessary global variables and functions
Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
Organize JavaScript code.
Make JavaScript code maintainable.
*/