/**
 *  객체 지향 프로그래밍 (클래스생성자메소드,상속,캡슐화)
 *    - 프로포타입기반의 언어.
 *    
 *     1. prototype 과 [[Prototype]] 
 *       -  둘다 프로토타입을 가리킨다.
 *       - [[Prototype]] 은 객체 입장에서 자신의 부모 역할을 하는 프로토타입을 가르킴
 *       - prototype 은 함수가 생성자로 만들어질때, 함수를 통해서 생성된 객체의 부모역할을
 *         하는 프로토타입 객체를 가르킴. 
 *     
*/

/* 6.1 클래스,생성자,메소드
 *    - 클래스 안에 메소드를 정의할때는 프로토타입 객체에 정의한 후, new 로 생성한 객체에서 접근할 수 있게 하는 것이 좋음.
 *    - 
 *  */

//ex6-1 문제 - 객체가 여러개 사용될 경우, 공통으로 쓸수 있는 getName, setName 메소드도 따로 생성함으로써 메모리낭비
/*
function Person(arg){
	this.name = arg;
	this.getName = function() { return this.name; }
	this.setName = function(value){ this.name = value; }
}

var me = new Person("zzoon");
console.log(me.getName()); //zzoon
me.setName("jamjoo");
console.log(me.getName()); //jamjoo
*/


/*ex6-2 프로토타입을 이용한 6-1의 문제 해결
	프로토타입 객체는 메소드를 가질수 있다. (프로토타입메소드)
	메소드 호출 패턴에서의 this는 그 메소드를 호출한 객체에 바인딩된다. (참고4.4.2.1 - functionObject3.js)
	자바스크립트에서는 함수도 객체(일급객체)이다 - 함수도 객체처럼 프로퍼티를 가질 수 있다.
	모든 함수들의 부모객체[[__proto__]] 는 Function.prototype
*/


//Person가 없으니 프로토타입 체이닝에 따라 부모Prototype에 선언.
/*
Function.prototype.method = function(name,func){
	
	console.dir(this.prototype);
	
	//prototype에 특수문자가 있으니 [] 표현식으로 써야함.
	if(!this.prototype[name])
		this.prototype[name] = func;

}*/

Function.prototype.method=function(name,func){
	if(!this.prototype[name])
		this.prototype[name] = func;
}

function Person(arg){
	this.name = arg;
}

Person.method("setName",function(value){
	this.name = value; 
});

Person.method("getName",function(){ //프로퍼티 만드는게 아니라 메소드호출 구문임.
	return this.name; 
});


var me = new Person("me");
var you = new Person("you");
console.log(me.getName()); //zzoon
console.log(you.getName()); //jamjoo








