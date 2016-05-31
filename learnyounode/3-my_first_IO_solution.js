//learnyounode my_first_IO

var fs = require('fs');
var file = process.argv[2];//name of file entered by user

//using callback on fs.readFile

/* 
fs.readFile(file, function(err, contents){
	var lines = contents.toString().split('\n').length -1;
	console.log(lines);
});
*/
fs.readFile(file, 'utf8', function(err, contents){
	var lines = contents.split('\n').length -1;
	console.log(lines);
});

//