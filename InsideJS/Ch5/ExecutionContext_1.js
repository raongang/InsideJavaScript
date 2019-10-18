
/**
 *   실행 컨텍스트(execution context)
 *     - 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념
 *     - 실행 가능한 자바스크립트 코드 블록(대부분 함수)을 실행되는 환경
 *     
 *   실행 컨텍스트가 형성되는 경우
 *     1. 전역코드 ( 전역 실행 컨텍스트가 생성됨 - argument 객체가 없다. ) 
 *     2. eval()함수로 실행되는 코드
 *     3. 함수 안의 코드를 실행할 경우
 */

/* ex5-1 

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
 *  5.2.1 활성 객체(=변수 객체) 생성  
 *    1) ex5-2의 함수를 실행하여 실행 컨텍스트 생성 ( execute() 를 실행시 )
 *    2) 활성객체 : 해당 컨텍스트에서 실행에 필요한 여러가지 정보를 담을 객체를 생성( 자바스크립트 엔진에서만 접근가능 )
 *    3) arguments 객체 생성
 *    4) 스코프 생성
 *      - 현재 실행중인 실행 컨텍스트 안에서 연결리스트(스코프체인)와 유사한 형식으로 만들어짐.
 *      - 현재 컨텍스트에서 특정변수에 접근해야 할 경우, 이 리스트를 활용한다. 
 *      - [[scope]] 스코프체인 
 *      - 
 *    5) 변수 생성.
 *      - 실행 컨텍스트 내부에서 사용되는 지역변수를 생성.  
 *      - 변수 객체생성이 이루어지고 나서 값이 할당되므로 그전에는 변수들 (a,b,func)이 메모리에만 올라가 있는 상태가 된다.
 *    6) this바인딩.
 *    7) 코드 실행.          
*/


/**
 *   5.3 스코프체인(필수 개념)
 *     - 현재 실행컨텍스트의 변수객체(활성객체) + 상위 컨텍스트의 스코프체인ㄴ
 *     - C,JAVA와 다르게 for(){}, if{} 같은 구문은 유효범위가 없다. 함수만 유효범위가 존재
 *     - [[scope]] - 유효범위를 나타내는 프로퍼티로, 함수내에서 리스트 형식으로 관리됨. 
 *     - 각각의 함수는 [[scope]] 프로퍼티로 자신이 생성된 실행 컨텍스트의 스코프 체인을 참조한다.
 *     - 함수가 실행되는 순간 실행 컨텍스트가 만들어지고, 이 실행 컨텍스트는 실행된 함수의 [[scope]] 프로퍼티를 기반으로 새로운 스코프 체인을 만든다.
 *     
 * */


/** 5.3.1 전역실행 컨텍스트의 스코프 체인 */
//ex5-3 함수가 없는 전역코드로 실행시 전역 실행 컨텍스트가 생성되고, 변수객체가 만들어진다.
console.log('전역실행 컨텍스트의 스코프 체인');

var var1 = 1;
var var2 = 2;

console.log(var1);
console.log(var2);

/** 5.3.2 함수를 호출한경우 생성되는 실행 컨텍스트의 스코프 체인 */

//ex5-4.
console.log('함수를 호출한경우 생성되는 실행 컨텍스트의 스코프 체인');

var temp1 = 10;
var temp2 = 20;

function scopeFunction(){
	var scopeTemp1 = 100;
	var scopeTemp2 = 200;
	
	console.log("scopeTemp1 >> " + scopeTemp1); //100
	console.log("scopeTemp2 >> " + scopeTemp2); //200
	
} 

scopeFunction();
//console.log("scopeTemp1 >> " + scopeTemp1); error
//console.log("scopeTemp2 >> " + scopeTemp2); error


//ex5-5
