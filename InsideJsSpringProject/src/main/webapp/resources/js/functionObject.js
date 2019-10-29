
Function.prototype.method=function(name,func){
	if(!this.prototype[name])
		this.prototype[name] = func;
}

function Person(arg){
	this.name = arg;
}

Person.method("setName", function(value){
	this.name = value;
});


function Student(arg){}
function F(){};

F.prototype = Person.prototype;

Student.prototype = new F();

console.log('Student');
console.dir(Student);
console.log('Person');
console.dir(Person);


Student.prototype.constructor= Student;
console.dir(Student.prototype);