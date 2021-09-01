//Show the word hello
console.log("Hello");
//wait for 2 seconds, after 2(1sec = 1000milisec) seconds show goodbye (function inside function parameter)
setTimeout(function(){
	console.log("Goodbye");
}, 2000);
//while waiting 2 seconds(earlier command), continue show hello again
console.log("Hello Again");