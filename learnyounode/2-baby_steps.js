var temp = process.argv;
//console.log("temp=", temp);
//console.log("temp.length=", temp.length);
var sum = 0;
for (var i=2; i<temp.length; i++){
	sum += parseInt(temp[i]);
}
console.log(sum)