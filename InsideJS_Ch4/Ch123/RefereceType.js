/*
*   java script object
*  - 배열,함수, 정규표현식도 포함
*  - '이름(key):값(value)' 형태의 container
* */

/* 객체 생성 방법?

  1. 기본 제공 내장 object() 함수 이용
  2. 객체 리터럴을 이용하는 방법
  3. 생성자 함수를 이용하는 방법
*/


// 1. Object() 함수를 통한 객체 생성
var foo = new Object();
//foo 객체 생성

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo); //출력값 : object
console.log(foo); //출력값 { name : 'foo', age : 30 , gender : 'male' }

// 2. 객체 리터럴(표기법)을 이용하는 방법
// 객체 리터럴 : 객체를 생성하는 표기법

var foo = {
    name : 'foo',
    age : 30,
    gender : 'male'
};

console.log(typeof foo);
console.log(foo);

var foo ={ }; //빈 객체
console.log(foo);


// 3. 생성자 함수를 이용하는 방법



















