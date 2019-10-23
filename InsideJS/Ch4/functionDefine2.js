/**1. 함수 호이스팅
 *  - 결론 : 함수 선언문 방식을 쓰지 말고 함수 표현식 방식을 이용권장
 */ 

console.log("함수 선언문 방식과 함수호이스팅");
/**
 *  add()함수가 정의되지 않았는데도 1에서 2를 호출가능
 *  함수 선언문 형태로 정의한 함수의 유효범위는 코드의 맨 처음부터 시작 -> 함수 호이스팅
 */
console.log(add(2,3)); // --1

function add(x,y){ // --2 (함수 선언문 형태로 add()함수 정의) 
	return x+y;
}
console.log(add(3,4)); // --3


console.log("함수 표현식방식과 함수호이스팅");
//console.log(add2(2,3)); //uncaught type error
var add2 = function(x,y) {
	return x+y;
};
console.log(add2(3,4)); //7