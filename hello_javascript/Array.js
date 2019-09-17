/* 배열 : 크기 지정하지 않더라도 어떤 위치에 어느타입의 데이터도 저장가능 */

//1. 배열 리터럴 방식으로 생성

var colorArr=['orange','yellow'];
console.log("배열 생성 출력");
console.log(colorArr[0]);
console.log(colorArr[1]);

//2. 동적 배열 - 위치 상관없음
console.log("동적 배열 생성");

var emptyArr=[];
console.log(emptyArr[0]); //undefined

//동적생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);
console.log(emptyArr.length); //8

//배열 length 프로퍼티의 명시적 변경
var arr = [0,1,2];
console.log(arr.length); //3

arr.length=5;
console.log(arr);

arr.length=2;
console.log(arr);
console.log(arr[2]);

//push() 메소드 - 배열의 끝에 항목 추가
console.log("PUSH");
var arr = ['zero','one','two'];
//push
arr.push('three');
console.log(arr);

arr.length=5;
arr.push('four');
console.log(arr); //zero , one, two three, undefined, four

//2. 기본 제공 내장 Array() 함수 이용 생성.
console.log("기본 제공 내장 Array() 함수 이용 생성!! ");
var foo = new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3);
console.log(bar);
console.log(bar.length);

