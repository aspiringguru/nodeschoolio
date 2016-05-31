//https://nodejs.org/api/fs.html
//buf = fs.readFileSync("file2Read.txt");
var temp = process.argv;
//console.log("temp=", temp);
if (temp.length>2){
	var fs = require("fs");
	var filename = temp[2];
	//console.log("filename=", filename);
	//var buf = fs.readFileSync(filename);//bad - this is the synchronous method.
	// need to use the asynchronous method fs.readFile
	fs.readFile(filename, function (err, buf) {
		if (err) {
			console.log("err trapped.")
			return console.error(err);
		}
		//console.log("fs.readFile no error");
		var str = buf.toString();
		splitStr = str.split("\n");
		console.log(splitStr.length-1);
	});

	//since buf has one more /n than the number of lines.
} else {
	//console.log("no args received, need to nominate a filename");
}
