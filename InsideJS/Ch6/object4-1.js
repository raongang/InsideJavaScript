/**
 *  6.2.2 클래스 기반의 상속의 문제점 해결방안
 *   - Student의 prototype이 부모클래스의 인스턴스를 직접 참조한다.
 *   - 자식 클래스의 prototype에 메소드가 추가될때마다 문제가 된다.
 *   - 자식 클래스와(me) 부모 클래스(you)가 독립적이어야 한다.  
 */

//ex6-8. 중계자 생성

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

Person.method("getName",function(){
	return this.name;
});


function Student(arg){}
function F() {};

F.prototype = Person.prototype;

Student.prototype = new F();

console.log('--------------------');
console.dir(Student.prototype);

Student.prototype.constructor= Student;

console.log('--------------------');
console.dir(Student.prototype.constructor);

Student.super = Person.prototype;

var me = new Student();
me.setName('zzzooo');
console.log(me.getName());


