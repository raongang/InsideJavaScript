/** 4.3.1 callback function 
 *    - 함수표현식에서 이름을 붙이지 않아도 되는 익명함수의 대표적인 용도가 콜백함수(ex. 이벤트핸들러처리)
 *    
 *     정의 
 *       - 명시적으로 호출하는 함수가 아니라, 개발자가 단지 함수를 등록하기만 하고, 어떤
 *         이벤트가 발생하거나 특점 시점에 도달했을때 시스템에서 호출되는 함수
 *        
 *       - 특정 함수의 인자로 넘겨서, 코드 내부에서 호출되는 함수
 *      
 * 
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
 *   - 최초 1번만 사용 가능.
 *   
 *   생성방법
 *     1. 함수이름 여부와 상관없이 ()로 function을 감싼다
 *     2. 함수가 호출될수 있게 ()를 추가한다.
 *       - ()안에 값을 추가하면 인자로 넘길수 있다.
 */

(function(name) {
	console.log('this is the immediate function -> ' + name);
})('foo');



