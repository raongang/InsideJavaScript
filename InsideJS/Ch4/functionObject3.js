/** 4.4 함수호출과 this */

/** 4.4.1 argument 객체
 *   - ex4-21특성으로 인해 runtime시 호출된 인자의 개수를 확인하고 다르게 동작하게 하는 것을 가능하게 해 주는 것이 argument 객체
 *   - 자바스크립트에서 함수를 호출할때 인수들과 함께 암묵적으로 arguments 객체가 함수내부로 전달됨.
 *       
 */

//ex4-21 함수 형식에 맞춰 인자를 넘기지 않더라도 함수 호출이 가능함을 나타내는 예제코드
function func(arg1, arg2){
	console.log(arg1, arg2);
}

func();  //undefined undefined
func(1); // 1 undefined
func(1,2);  // 1 2
func(1,2,3); // 1 2

//ex4-22 arguments 유사 배열 객체 예제코드

//add() 함수
function add(a,b){
	//arguments 객체 출력
	console.log(arguments);
	return a+b;
}
console.log('ex4-22 arguments 유사 배열 객체 예제코드');
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));