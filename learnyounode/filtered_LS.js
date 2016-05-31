var temp = process.argv;
//console.log("args received = temp=", temp);
var fs = require("fs");
var path = require("path");

var folder = process.argv[2];
//console.log("folder=", folder);
var fileType = "." + process.argv[3];
//console.log("fileType=", fileType);
var matchedFiles = []
fs.readdir(folder, function(err, files){
	if (err) {
		console.log("err trapped.")
		return console.error(err);
	}
	//safely traps errors & output to console.log

	//console.log(files);//print list of all files in directory to console.log
	files.forEach(function(file){
		//loops through array files, each instance is file
		if(path.extname(file)=== fileType){
			//refer api docs, path.extname('index.html') 
			//returns '.html'
			console.log(file);
		}
	});
});

