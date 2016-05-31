/*
javascript scope example, modified from 'scope' exercise in https://github.com/sethvincent/javascripting

publishing for feedback and comments.
*/

var a=4;
console.log("before foo : a="+a);//a=4, b &c are undefined at this point & throw runtime errors if called.

function foo(){
	console.log("start of foo : a="+a+" b="+b);//a=4, b=undefined.
	var b=a*3;
	console.log("foo : after b=a*3 : a="+a+" b="+b);//a=4, b=12 (4*3)
	function bar(c){
		//NB: bar is called near end of foo, watch order of output.
		//NBB: b is defined within foo - refer 'var b=12' (a*3=4*3=12) above.
		//NBB: c=12 (c=b*4=12*4=48). odd that b is undefined in output while c has a value !!!
		console.log("@ start of bar : a="+a+" b="+b+", c="+c);//a=4, b=undefined, c=48
		var b=2;
		console.log("bar after b=2 : a="+a+" b="+b+", c="+c);//a=4, b=2, c=48
	}
	console.log("in foo after bar: a="+a+" b="+b);//a=4, b=12. c=undefined & runtime error if called.
	bar(b*4);
	console.log("end of foo : a="+a+" b="+b);//a=4, b=12
}
foo();


/*
to execute 'node scope_intro.js'
NBB: runtime errors occur if attempting to output variables b & c where not shown in code.
nbb: error trapping ommitted for brevity.

output below.
---------------------------------------
before foo : a=4
start of foo : a=4 b=undefined
foo : after b=a*3 : a=4 b=12
in foo after bar: a=4 b=12
@ start of bar : a=4 b=undefined, c=48
bar after b=2 : a=4 b=2, c=48
end of foo : a=4 b=12


Help request : 
why is b undefined at line 18? 
Output from line 22 shows b=12 within foo and prior to calling bar.
a variable declared in foo should be a global variable when viewed by bar, since bar is declared inside foo.



---------------------------------------
*/