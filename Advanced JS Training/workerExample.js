//workerExample.js
var result = 0;
for (var i = 0; i < 103455; i++) {		
	console.log("Doing Some work");
	result += i;
	if(i % 1000 == 0)
		result =0;
}
postMessage(result);