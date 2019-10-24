/** created with JetBrains Webstorm */

/*
var i=0;
for(i=0;i<10;i++){

    document.write("Hello javascript!");
    document.write("<br/>");
}*/

/** 기본타입 */

/* 숫자타입 - 하나의 숫자타입만 존재.
*   하나의 숫자형만 존재. 모든 숫자를 64bit 부동소수점 형태로 저장
* */
var intNum=10;
var floatNum = 0.1;

var num = 5/2;
console.log(num); //출력값 2.5
console.log(Math.floor(num)); // 소수점 삭제 출력값 2

/* 문자열 타입
  한번 정의된 문자열은 변하지 않는다. 즉, 한번 생성된 문자열은 읽기만 가능 수정 불가
 */
var sigleQuoteStr='single quote string';
var dobuleQuoteStr="double quote string";
var singChar='a';

var str='test'; //str 문자열 생성
console.log(str[0],str[1],str[2],str[3]); //(출력값) t e s t
str[0] = 'T'; //문자열의 첫글자를 대문자로 변경하면
console.log(str); // (출력값) test

/* 불린 타입 */
var boolVar=true;

/* undefined 타입
   undefined 는 타입이자 비어 있는 값
 */
var emptyVar;

/* null타입 */

var nullVar=null; //null 타입 변수 선언
console.log(typeof nullVar==null); //false
console.log(nullVar==null); //true

console.log(
    typeof intNum,
    typeof floatNum,
    typeof sigleQuoteStr,
    typeof dobuleQuoteStr,
    typeof singChar,
    typeof boolVar,
    typeof emptyVar,
    typeof nullVar // 결과 object

);



