/**
 *  6.2.2 클래스 기반의 상속
 *    - 클래스 역할을 하는 함수로 상속을 구현한다.
 */

function Person(arg){
	this.name = arg;
}

//메소드 호출 패턴에서의 this는 그 메소드를 호출한 객체에 바인딩된다. (참고4.4.2.1 - functionObject3.js)
Person.prototype.setName = function(value) { 
	console.log('value >> ' + value);
	this.name = value;
};

Person.prototype.getName = function(){
	return this.name;
};

function Student(arg){
	console.dir(this);
	console.log(this); //Person{}
	console.log(arguments);
	/**
	 *     4.4.2.3 생성자 함수를 호출할때 this 바인딩 (중요)
	 *       - 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작함.
	 *       - 원치않는 생성자 함수의 호출을 방지하기 위해서 함수의 첫 문자를 대문자로 쓰기를 권고하고 있음.
	 *       - 생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가르키는 객체를
	 *         자신의 프로토 타입객체로 설정한다.
	 *       - 생성자가 함수가 생성한 객체(빈 객체)에 this를 바인딩한다. 
	 */       
	Person.apply(this,arguments); //문제점 해결  super()와 같은 역할.
}

var you = new Person("iamhjoo"); 
//console.log('--------------------');
//console.dir(you);

Student.prototype=you; //

//Student에 1번 부분이 없다면 Person의 this에 연결됨.
var me = new Student("zzoon constructor");  //문제점 - 얘는 호출되지 않음.
//console.log(me.getName());
//me.setName("zzoon set Name");
//console.log(me.getName());






