var fs = require("fs");

console.log("Begin reading file");
// A callback => is the function that is declared in the parameters
fs.readFile("input.txt", (err,data) => {
	if (err) return console.log(err);
	console.log(data.toString());
	console.log("Finish reading file");
	console.log("Begin appending file");
	fs.appendFile("input.txt"," Appending item", (err) => {
		console.log("Finish appending file");
		console.log("Begin re-reading file");
		fs.readFile("input.txt",(err,data) => {
			if (err) return console.log(err);
			console.log(data.toString());
			console.log("Finish re-reading file");
		});
	});
	
});
