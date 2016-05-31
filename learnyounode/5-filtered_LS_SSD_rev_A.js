var temp = process.argv;
//console.log("temp=", temp);
if (temp.length==4){
	var fs = require("fs");

	var path = temp[2];
	//console.log("path=", path);
	var fileType = temp[3];
	//console.log("fileType=", fileType);
	var matchedFiles = []
	fs.readdir(path, function(err, items){
		//console.log(items);
		for (var i=0; i<items.length; i++) {
        	//console.log("items[",i,"]=", items[i]);
        	var temp = items[i].split(".");
        	//console.log("items[i].split(.)=", temp);
        	if (temp[1]==fileType){
        		//console.log("fileType match")
        		console.log(items[i]);
        	}
    	}
	});
} else {
	console.log("incorrect number of args received, need to nominate path & filetype");
}
