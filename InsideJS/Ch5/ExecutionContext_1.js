
/**
 *   실행 컨텍스트(execution context)
 *     - 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념
 *     - 실행 가능한 자바스크립트 코드 블록(대부분 함수)을 실행되는 환경
 *     
 *   실행 컨텍스트가 형성되는 경우
 *     1. 전역코드
 *     2. eval()함수로 실행되는 코드
 *     3. 함수 안의 코드를 실행할 경우
 */


/* ex5-1 
console.log("Ths is Global Context");

function ExContext1(){
	console.log("This is ExContext1");
}

function ExContext2(){
	ExContext1();
	console.log("This is ExContext2");
}
																								
ExContext2();
*/


/** 
 *   5.2 실행 컨텍스트 생성 과정
 *     - 활성 객체와 변수 객체
 *     - 스코프 체인
 */

//ex5-2

function execute(param1,param2){
	var a=1, b=2;
	
	function func(){
		return a+b;
	}
	return param1+param2+func();
	
}

execute(3,4);

/**
 *  5.2.1 활성 객체 생성
 *    1) ex5-2의 함수를 실행하여 실행 컨텍스트 생성
 *    2) 활성객체 : 해당 컨텍스트에서 실행에 필요한 여러가지 정보를 담을 객체를 생성
 *    3) arguments 객체 생성
*/