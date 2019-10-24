/**
 *	클로저
 *    - 이미 생명주기가 끝난 외부함수의 변수를 참조하는 함수.
 *    - 함수형 프로그래밍이 가능.  
 *  자유변수
 *    - 클로저로 참조되는 외부변수
 */


/** 5.4.1 클로저의 개념 */
/* ex5-7
 *   - 각 함수 객체가 처음 생성될 때 [[scope]]는 전역 객체의 [[scope]]를 참조
     - 함수 객체가 호출이 아닌 선언할때 이미 스코프는 정해집니다.
     - 최초 실행시 전역 실행 컨텍스트가 만들어지고, 변수객체(활성객체)가 생성됨. 이때, [[scope]]는 전역객체를 가르킨다.
     - 자바스크립트의 함수는 일급객체이다.
     
     1) inner()를 실행할때, outerFunc() 실행 컨텍스트가 끝났지만, innerFunc [[scope]]에 outerFunc() 변수 객체(활성객체)는 그대로 남아 있다.


function outerFunc(){
	var x = 10; //자유변수
	var innerFunc = function(){ console.log("x >> " + x); } //innerFunc : 클로저
	return innerFunc;
}

var inner = outerFunc();
// inner는 function(){ console.log("x >> " + x); } 함수를 리턴 받는데 이때 이미 사리진 outerFunc의 지역변수 var x를 참고할려고 한다.
// outerFunc 실행 컨텍스트가 종료됨.
inner(); // x >> 10;
 */

//ex5-8 
function outerFunc2(arg1,arg2){
	console.log(arguments); //자바스크립트에서 함수를 호출할때 인수들과 함께 암묵적으로 arguments 객체와 this가 함수내부로 전달됨.
	var local = 8;
	function innerFunc2(innerArg){
		console.log((arg1+arg2)/(innerArg+local));
	}
	return innerFunc2;
}
var exam1 = outerFunc2(2,4)   
exam1(2); //0.6










