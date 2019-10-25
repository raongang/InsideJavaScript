/**
 *  객체 지향 프로그래밍
 *    - 프로포타입기반읭 언어. 
*/

/* 6.1 클래스,생성자,메소드 */

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

//ex6-2 프로토타입을 이용한 6-1의 문제 해결
//프로토타입 객체는 메소드를 가질수 있다. (프로토타입메소드)
//메소드 호출 패턴에서의 this는 그 메소드를 호출한 객체에 바인딩된다. (참고4.4.2.1 - functionObject3.js)

Function.prototype.method = function(name,func){
	console.log("여기");
	this.prototype[name] = func;
}

function Person(arg){
	this.name = arg;
}
//Person.prototype.getName = function () { return this.name; 	}
//Person.prototype.setName = function(value){ this.name = value; }

Person.method("setName",function(value){ 
	this.name = value; 
});

Person.method("getName",function(){ 
	return this.name; 
});


var me = new Person("me");
var you = new Person("you");

console.log(me.getName()); //zzoon
console.log(you.getName()); //jamjoo








