/**
 4.2 함수 객체
 
 4.2.1자바스크립트에서는 함수도 객체(일급객체)이다
   - 함수도 객체처럼 프로퍼티를 가질 수 있다.
*/
function add(x,y){
	return x+y;
}

//프로퍼티 추가
add.result = add(3,2);
add.status='OK';

console.log(add.result);
console.log(add.status);


/** 4.2.2 자바스크립트에서 함수는 값을 취급된다. 
 *   - 변수나 프로퍼티 값으로 할당
 * */

var foo=100; //변수에 값 할당
var bar = function(){ return 100; };
console.log(bar());

var obj = {}; 
//객체의 프로퍼티 동적 생성
obj.baz = function () { return 200; }
console.log(obj.baz());
 

/**
	4.2.2.2 함수 인자로 전달
	 - 함수를 다른 함수의 인자로 넘긴다
*/

var foo= function(func){ //함수표현식으로 foo()함수 생성
	func();
};

//foo()함수 생성
foo(function (){
	console.log('Function can be used as the argument1');
});

/** 4.2.2.3 리턴값으로 활용 */
		
var foo2 = function temp2(){ //함수를 리턴하는 foo() 함수 정의
	return function(){
		var a = 5;
		return a;
		//console.log('this function is the return value');
	};
};

var bar = foo2(); //foo()함수가 호출되면, 리턴값으로 전달되는 함수가 bar변수에 저장된다.
console.log(bar);
console.log(bar());

//var bar = function(){ console.log('this function is the return value2');};
//bar(); // () 함수호출 연산자를 이용하여 bar()로 리턴된 함수를 실행하는 것이 가능하다.

/** 4.2.3 함수 객체의 기본 프로퍼티
	 - 함수는 객체이며 표준 프로퍼티가 정의되어 있다
	 - 모든 함수들의 부모객체는 Function Prototype 객체.
	 - Function Prototype 객체 그 자체는 예외적으로 부모가 자바스크립트의 모든 객체의 조상인 Object.prototype 객체임.
*/

//add()함수 객체 프로퍼티를 출력하는 코드

console.dir(getFunctionProperty);

/** 4.2.3.1 length property 
 *   - 함수 객체의 length 프로퍼티는 함수를 작성할 때 정의한 인자 개수.
 * */
function funcLength(){}
function funcLength1(x){ return x; }
function funcLength2(x,y) { return x+y; }
function funcLength3(x,y,z) { return x+y+z; }

console.log("funcLength : " + funcLength.length);   //0
console.log("funcLength1 : " + funcLength1.length); //1
console.log("funcLength2 : " + funcLength2.length); //2
console.log("funcLength3 : " + funcLength3.length); //3

/** 4.2.3.2 prototype property (이 부분 다시 체크)
 *    - prototype 객체 네이밍은 자신과 연결된 함수의 prototype 프로퍼티 값을 그대로 이용한다.
 *      ( ex. 함수 이름이 add() 면 프로토타입 객체는 add.prototype 
 * */

//MyFunction()함수 정의

function myFunction(){
	return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);




