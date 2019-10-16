/**
 *   4.5.8 디폴트 프로토타입은 다른 객체로 변경이 가능하다.
 *    - 디폴트 프로토타입 객체는 함수가 생성될떄 같이 생성되며, 함수의 prototype 프로퍼티에 연결된다.
 *    - 자바스크립트에서는 이렇게 함수를 생성할 때  해당 함수와 연결되는 디폴트 프로토타입 객체를 다른 일반 객체로 변경이 가능하다.
 *      ( 이 특징을 이용해서 객체지향의 상속을 구현한다.) 
 * */

function Person(name){
	this.name = name;
}

console.log(Person.prototype.constructor); //Person(name)

var foo = new Person('foo'); //변경이전 객체생성

console.log(foo.country); //undefined

//디폴트 프로토타입 객체 변경 ( 객체 리터럴 방식으로 생성 ) 
Person.prototype = {
	country : 'korea'	
};

console.log(Person.prototype.constructor);

var bar = new Person('bar'); //변경이후 객체생성, 프로토타입 변경이후 생성이므로 변경된 prototype(Object.prototype) 객체로 링크가 연결된다. ex4-29참고

console.log(foo.country); //Object()
console.log(bar.country); //korea
console.log(foo.constructor); //Person(name)
console.log(bar.constructor); //Object()

/**
 *   4.5.9 객체의 프로퍼티 읽기나 메소드를 실행할 떄만 프로토타입 체이닝이 동작한다.
 *     - 자바스크립트는 객체에 없는 프로퍼티에 값을 쓸려고 할 경우 동적으로 프로퍼티를 추가하기 때문에, 프로토타입 체이닝이 
 *       일어나지 않는다.
 */

//ex4-44 프로토타입 체이닝과 동적 프로퍼티 생성 

function Person2(name){
	this.name = name;
}

Person2.prototype.country='Korea';

var foo2 = new Person2('foo2'); //프로토타입 체이닝 발생
var bar2 = new Person2('bar');  //프로토타입 체이닝 발생

console.log('ex4-44');
console.log(foo2.country); 
console.log(bar2.country);

foo2.country='USA'; //프로퍼티 동적 생성

console.log(foo2.country);
console.log(bar2.country);




