/**
 *  6.2.2 클래스 기반의 상속
 *    - 클래스 역할을 하는 함수로 상속을 구현한다.
 */

function Person(arg){
	this.name = arg;
}

//메소드 호출 패턴에서의 this는 그 메소드를 호출한 객체에 바인딩된다. (참고4.4.2.1 - functionObject3.js)
Person.prototype.setName = function(value) { 
	this.name = value;
};

Person.prototype.getName = function(){
	return this.name;
};

function Student(arg){
	
}

var you = new Person("iamhjoo");
Student.prototype=you;

var me = new Student("zzoon constructor");
//me.setName("zzoon set Name");
console.log(me.getName());

