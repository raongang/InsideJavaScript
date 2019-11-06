/**
 * http://usejsdoc.org/
 */

function Person(name){
	this.name = name;
	console.log(this.name);
	this.sayHello;
}

var foo = new Person('foo');

Function.prototype.sayHello = function(){ console.log(this.name);}

foo();