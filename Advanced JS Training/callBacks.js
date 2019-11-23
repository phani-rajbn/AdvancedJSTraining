//debuggingTools.js
/*
1. What do you expect the first expression to do?
2. Why do you expect it to do that?
3. Does it actually do it?
Console.log may be the go-to to check a var, const, let, argument or this value, which is quite adequate many a time, but sometimes Chrome’s console displays a value updated after its runtime evaluation. i in the blue box  of the console will tell that this value was updated after the runtime.  
Chrome's Debugger Tools: 
Use debugger keyword in JS to test UR code. Similar to break point in Client side tool. Key difference is breakpoints are line based and debugger  is code based. As U move the code to the other like, the breakpoint wont move, but debugger will always be the part of the code...
React's Developer Tools: For checking React code...
Network Tab: If you are not sure if your request made it to the server, head to the Chrome Dev Tools network tab. Look in the call list for the request you are not sure about. You can check the status code and click on the request to view headers and other info.
POSTMAN: Postman is an app that you download and install. The app gives you the option to pick a request method (GET, POST, PUT, PATCH, DELETE…), paste an endpoint, add any auth credentials required by the endpoint, and send the request. The response is displayed in the app’s body tab.
WebPack:If Webpack can’t build, it will throw an error that shows a lot of helpful details. So if something doesn’t update in the browser when you refresh the page, check the Webpack bash to make sure it is compiling. 
*/
////////////////Promises in ES5 and ES 6/////////////////////
/*
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code due to the high usage of lambda Expressions in code.
Benefits of Promises
a. Improves Code Readability
b. Better handling of asynchronous operations
c. Better flow of control definition in asynchronous logic
d. Better Error Handling
A Promise has four states:
1)fulfilled: Action related to the promise succeeded
2)rejected: Action related to the promise failed
3)pending: Promise is still pending i.e not fulfilled or rejected yet
4)settled: Promise has fulfilled or rejected
A promise can be created using Promise constructor.
Parameters

Promise constructor takes only one argument,a callback function.
Callback function takes two arguments, resolve and reject
Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.
*/
/*function notifyAll(fnSms, fnEmail) {
	setTimeout(()=>{
		console.log("starting all notifications");
		fnSms();
		fnEmail();
	}, 2000);
}

notifyAll(()=>{
	for (var i = 0; i < 10; i++) {
		console.log("sms sent to " + i);
	}
}, ()=>{
	for (var i = 0; i < 10; i++) {
		console.log("email sent to " + i);
	}
});

console.log("end of the program")*/
/*var promise = new Promise((res, reg)=>{
	if(Math.random() == 1)
		res("I am a Positive no");
	else
		reg("I am a negative no");
});


promise.then((res)=>{
	console.log(res)
}, (err)=>{
	console.log(err);
});*/
/*
var id = 0;
var promise = new Promise((res, req)=>{
	id = setTimeout(()=>{
		var data = 0;
		for (var i = 0; i < 10; i++) {
			console.log(i);
			data += i;
		}
		res(data);	
	}, 2000);
//	clearTimeout(id)
});

promise.then((res)=>{
	console.log(res)
}).catch((err)=>console.log(err));
console.log("terminated")
******************async and await functions*************************/
function someFunc(){
	setTimeout(()=>{
		for(let i =0 ; i <10;i++)
			console.log(i);
	}, 2000)
}
const testFunc = async(somefunc)=>{
	console.log("Trying new way!!!!");
	await somefunc();
	return "done";
}

testFunc(someFunc).then((res)=>{
	console.log(res);
});

console.log("Completed");
