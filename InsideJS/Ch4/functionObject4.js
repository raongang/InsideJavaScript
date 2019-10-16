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

/**  4.5.4 프로토타입 체이닝의 종점. 
 *      - 객체 리터럴 방식이나 생성자 함수방식에 상관없이 모든 자바스크립트 객체는 프로토타입 체이닝으로 Object.prototype 객체가 가진 프로퍼티와 메소드에 접근하고, 서로 공유가 가능하다.
 *
*/

/**
 *   4.5.5 기본 데이터 타입 확장.
 *     - 자바의 모든 객체가 프로토타입 체이닝으로 Object.prototype에 정의한 메소드를 사용 가능.   
 *     - 숫자 : Number.prototype / 문자열 : String.prototype / 배열 : Array.prototype -> Object.prototype을 가지고 있음.
 *     - Object.prototype, String.prototype 같은 표준 빌트인 프로토타입 객체에도 사용자가 직접 정의한 메소드를 추가하는 것을 허용함.
 * */

//ex4-40 String 기본 타입에 메소드 추가.

String.prototype.testMethod= function(){
	console.log('This is the String.prototype.testMethod()');
};

var str ="this is test";
str.testMethod();
console.dir(String.prototype);

/**
 *  4.5.6 프로토 타입도 자바 스크립트 객체이다.
 *    - 함수가 생성될때, 자신의 prototype프로퍼티에 연결되는 프로토타입 객체는 디폴트로 constructor 프로퍼티만을 가진 객체이다.
 *    - 동적으로 프로퍼티 추가/삭제가 가능하며 실시간 프로토타입 체이닝에 적용된다.
 */

//ex 4-41 프로토 타입 객체의 동적 메소드 생성 예제 코드
console.log('ex4-41 example');
function dynamicPerson(name){
	this.name = name;
}
var dynamicFoo = new dynamicPerson('dynamic');
// dynamicFoo.sayHello(); error
// 프로토타입 객체에 sayHello() 메소드 정의.
dynamicPerson.prototype.sayHello = function (){ console.log('Hello') } 

dynamicFoo.sayHello();

/** 
 *    4.5.7 프로토타입 메소드와 this바인딩
 *      - 프로토타입 객체는 메소드를 가질수 있다. (프로토타입메소드)
 *      - 메소드 호출 패턴에서의 this는 그 메소드를 호출한 객체에 바인딩된다. (참고4.4.2.1 - functionObject3.js)
 * */

//ex 4-42 프로토타입 메소드와 this바인딩

//생성자 함수
function thisFunction(name){
	this.name = name;
}

//getName() 프로퍼티 메소드
thisFunction.prototype.getName = function(){ return this.name; };
//객체생성
var thisObj = new thisFunction('param1');
console.log(thisObj.getName()); //param1

//thisFunction.prototype 객체에 name 동적 추가

thisFunction.prototype.name ='person';
console.log(thisFunction.prototype.getName()); //person



