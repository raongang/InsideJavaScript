/* 함수 생성 방법
*      1. 함수 선언 ( 함수 리터럴 방식으로 생성 )
*      2. 함수 표현 ( 함수 리터럴 방식으로 생성)
*      3. Function() 생성자 함수
*
*      ※ 함수도 일반 객체처럼 취급됨...
*
* */

// 1. 함수 리터럴 선언
// 함수명인 add 가 없는 경우도 있음. 이를 익명함수라고 함. 매개변수 타입이 없음
function add(x,y){
    return x+y;
}

// 2.함수 선언문 방식으로 함수 생성하기
console.log("2.함수 선언문 방식으로 함수 생성하기");
console.log("함수 선언문 방식으로 함수 생성시에는 반드시 함수명 정의!");

function add(x,y){
    return x+y;
}
console.log(add(3,4));

/* 3.함수 표현식 방식으로 함수 생성하기
      - 자바스크립트에서 함수도 하나의 값으로 취급  => 함수를 일급객체라 함.
      - 숫자나,문자열처럼 변수에 값 할당이 가능해짐

     함수표현식
       - 함수 리터럴로 하나의 함수를 만들고 생성된 함수를 변수에 할당하여 함수를 
         생성하는 것
       - 함수명이 생략될 수 있음.
 */

console.log("3.함수 표현식 방식으로 함수 생성하기");

//여기서 add는 함수이름이 아닌 함수변수로 함수의 참조값을 가진다.
var add = function(x,y){ return x+y; };
var plus = add;

console.log(add(3,4));
console.log(plus(5,6));



