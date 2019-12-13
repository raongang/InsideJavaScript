/**
 * http://usejsdoc.org/
 */

/*
function Person(name){
	this.name = name;
	console.log(this.name);
	this.sayHello;
}

var foo = new Person('foo');

Function.prototype.sayHello = function(){ console.log(this.name);}
*/


//parsing 테스트

var temp = "sample_ts.pdf/0";

var result = temp.indexOf("/");
console.log("result >> " + result);

var result2 = temp.substring(result+1); 
console.log("result2 >>" + result2);
