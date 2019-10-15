/** 4.5 프로토타입 체이닝 */


/** 4-5-1. prototype 객체와 [[Prototype]] 링크의 차이
 *    -자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체를 자신의 부모 객체로 설정하는 [[Prototype]]링크로 연결한다.
 * */

//ex 4-37 prototype 프로퍼티와 [[Prototype]]링크구분.
//Temp생성자 함수 - Temp.prototype
function Temp(name){
	this.name = name;
}

//foo객체 생성
var objFoo = new Temp('objFoo');
console.dir(Temp);
console.dir(Temp.prototype);
console.dir(objFoo);


//MyFunction()함수 정의
function myFunction(){
	return true;
}
console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);

/**
 *   4.5.2 객체 리터릴 방식으로 생성된 객체의 프로토타입 체이닝
 */

//객체리터럴로 생성한 객체는 Object()라는 내장 생성자 함수로 생성된 것.
// Object.prototype
var myObject ={
	name : 'foo',
	sayName : function(){
		console.log('My name is ' + this.name);
	}	
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nicknme'));
//myObject.sayNickName(); //error

/** 4.5.3 생성자 함수로 선언된 객체의 프로토타입 체이닝
 *   - 리터럴 방식과 약간 다르게 이루어진다.
 *   - 자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가르키는 객체를 자신의 프로토타입(부모객체)로 취급한다. 
 *  
*/

//ex 4-39 생성자 함수 방식에서의 프로토타입 체이닝

//Person() 생성자 함수
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

/**  4.5.4 프로토타입 체이닝의 종점 
 *      - 객체 리터럴 방식이나 생성자 함수방식에 상관없이 모든 자바스크립트 객체는 프로토타입 체이닝으로 Object.prototype 객체가 가진 프로퍼티와 메소드에 접근하고, 서로 공유가 가능하다.
 *
*/
