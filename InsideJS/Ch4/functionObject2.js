/**
 *  4.3 함수의 다양한 형태
 * 
 *  4.3.1 callback function 
 *    - 함수표현식에서 이름을 붙이지 않아도 되는 익명함수의 대표적인 용도가 콜백함수(ex. 이벤트핸들러처리)
 *    
 *     정의 
 *       - 명시적으로 호출하는 함수가 아니라, 개발자가 단지 함수를 등록하기만 하고, 어떤
 *         이벤트가 발생하거나 특점 시점에 도달했을때 시스템에서 호출되는 함수
 *       - 특정 함수의 인자로 넘겨서, 코드 내부에서 호출되는 함수
 * */


/* window.onload event handler example 

<!Document html>
<html><body>
	<script>
		window.onload = function(){
			alert('This is the callback function');
		});
	</script>
</body></html>

*/

/** 4.3.2 즉시 함수 
 *   - 함수의 정의와 동시에 바로 실행하는 함수로 익명 함수를 응용한 형태
 *   - 용도 : 최초 1번만 사용 가능(초기화코드) , jquery
 *   
 *   생성방법
 *     1. 함수이름 여부와 상관없이 ()로 function을 감싼다
 *     2. 함수가 호출될수 있게 ()를 추가한다.
 *       - ()안에 값을 추가하면 인자로 넘길수 있다.
 */

(function(name) {
	console.log('this is the immediate function -> ' + name);
})('foo');

/** 4.3.3 내부함수 
 * */

//ex.4-18
function parent(){
	var a = 100;
	var b = 200;

	//child 내부함수 정의
	function child(){
		var b = 300;
		var c = 400;
		
		console.log(a); //스코프체이닝 때문에 자신의 둘러싼 외부함수의 변수에 접근가능.
		console.log(b);
	}
	child();
}
parent();
//child(); -- child is not defined ( 자바스크립트의 함수 스코프 때문 ) 

/* ex4-19 함수 스코프 외부에서 내부를 호출할수 있는 예제 코드 (클로저)
 *  - 클로저 : 실행이 끝난 parent2와 같은 부모 함수 스코프의 변수를 참조하는 inner()와 같은 함수
 */

function parent2(){
	var a2 = 100;
	//child 내부 함수

	var child2 = function(){
		console.log(a2);
	}
	//child 함수 반환
	return child2;
}

var inner = parent2();
inner();

/** 4.3.4 함수를 리턴하는 함수 */
// ex4-20 - 4.2.2.3과 같은 방식

var self = function(){
	console.log('a');
	
	return function(){
		console.log('b');
	}
}

var a = self();
a();





