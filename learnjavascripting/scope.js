var a=1, b=2, c=3;
console.log("at start - a: "+a+", b: "+", c: "+c);
(function firstFunction(){
	console.log("at start of firstFunction. - a: "+a+", b: "+b+", c: "+c);
	var b=5, c=6;
	console.log("at end of firstFunction. - a: "+a+", b: "+b+", c: "+c);
	(function secondFunction(){
		console.log("at start of secondFunction. - a: "+a+", b: "+b+", c: "+c);
		var b=8;
		console.log("at end of secondFunction. - a: "+a+", b: "+b+", c: "+c);
		(function thirdFunction(){
			console.log("at start of thirdFunction. - a: "+a+", b: "+b+", c: "+c);
			var a=7, c=9;
			console.log("at end of thirdFunction. - a: "+a+", b: "+b+", c: "+c);
			(function fourthFunction(){
				console.log("at start of fourthFunction. - a: "+a+", b: "+b+", c: "+c);
				var a=1, c=8;
				console.log("at end of fourthFunction. - a: "+a+", b: "+b+", c: "+c);
			})();
		})();
	})();
})();

console.log("at end - a: "+a+", b: "+b+", c: "+c);