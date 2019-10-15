
function Person(name,age,hobby){
	this.name = name;
	this.age = age;
	this.hobby = hobby;
} 

var foo = new Person('foo',30,'tennis');
//프로토타입 체이닝 
console.log(foo.hasOwnProperty('name'));
//Person.prototype 객체 출력
console.dir(Person.prototype);