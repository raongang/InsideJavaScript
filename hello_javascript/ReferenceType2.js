

//참조 타입의 특성

//1. 동일 객체 참조시 ( 실제 값이 아닌 참조값을 가르킴 )

var objA = {
  val : 40
};

var objB = objA;

console.log("objA : " + objA.val);
console.log("objB : " + objB.val);

objB.val = 50;

console.log("After objA : " + objA.val);
console.log("After objB : " + objB.val);

// 2. 객체 비교

console.log("객체 비교");
var a = 100;
var b = 100;

var objA = { value : 100 };
var objB = { value : 100 };

var objC = objB;

console.log(a==b);
console.log(objA==objB);
console.log(objB==objC);

// 3. 참조에 의한 함수 호출 방식

//4. 프로토 타입 ( 자바의 부모 객체 같은 거 )
console.log("object print");

var foo = {
    name : 'foo',
    age : 30
}

console.log(foo.toString());
//프로토 타입 객체
console.log(foo.toString());
console.dir(foo);
