//생성자 함수 
function Person2(name,age, gender,position){
	this.name = name;
	this.age=age;
	this.gender=gender;
}

//Person2 생성자 함수를 이용해 bar객체, baz객체 생성 
var bar = new Person2('bar',33,'woman');
console.dir(bar);

var baz = new Person2('baz',25,'woman');
console.log(baz);

//ex 4-30 new를 붙이지 않고 생성자 함수 호출시의 오류.

var qux = Person2('qux',20,'man');
console.log(qux);
console.log(window.name);
console.log(window.age);
console.log(window.gender);
