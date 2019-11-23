//collections.js
//key should be unique and value could be same...
function mapExample() {
	var users = new Map();
	users.set("phani", "welcome123");
	users.set("ramnath", "apple123");
	users.set("banu", "com123");
	users.set("vinod", "test123");
	console.log(users.size);
	users.forEach((value, key)=>{
		console.log(`User:${key}: Pwd: ${value}`);
	});	
}

//mapExample();

function setExample() {
	var players = new Set();
	players.add("Sachin");
	players.add("Rahul");
	players.add("Sourav");
	players.add("Srinath");
	console.log(players.size)
	players.forEach((val)=>{
		console.log(val)
	})
	console.log("Using for of");
	for (player of players) {
		console.log(player)
	}
}
setExample();