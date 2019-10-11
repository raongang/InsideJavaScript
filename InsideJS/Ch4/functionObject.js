console.log("4.2.1자바스크립트에서는 함수도 객체(일급객체)이다");
console.log("함수도 객체처럼 프로퍼티를 가질 수 있다.");

function add(x,y){
	return x+y;
}
//프로퍼티 추가
add.result = add(3,2);
add.status='OK';

console.log(add.result);
console.log(add.status);

console.log("4.2.2 자바스크립트에서 함수는 값을 취급된다.");
console.log("4.2.2.1 변수나 프로퍼티 값으로 할당");
var foo=100; //변수에 값 할당
var bar = function(){ return 100; };
console.log(bar());

var obj = {}; 
//객체의 프로퍼티 동적 생성
obj.baz = function () { return 200; }
console.log(obj.baz());

console.log("4.2.2.2 함수 인자로 전달");
console.log("함수를 다른 함수의 인자로 넘긴다");

var foo= function(func){ //함수표현식으로 foo()함수 생성
	func();
};

//foo()함수 생성
foo(function (){
	console.log('Function can be used as the argument1');
});


console.log("4.2.2.3 리턴값으로 활용");
var foo2 = function temp2(){ //함수를 리턴하는 foo() 함수 정의
	return function(){
		var a = 5;
		return a;
		//console.log('this function is the return value');
	};
};

var bar = foo2(); //foo()함수가 호출되면, 리턴값으로 전달되는 함수가 bar변수에 저장된다.
console.log(bar());

//var bar = function(){ console.log('this function is the return value2');};
//bar(); // () 함수호출 연산자를 이용하여 bar()로 리턴된 함수를 실행하는 것이 가능하다.

console.log("4.2.3 함수 객체의 기본 프로퍼티");







