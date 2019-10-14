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
	console.log("arguments.length : " + arguments.length); //인자개수..
	return a+b;
}
console.log('ex4-22 arguments 유사 배열 객체 예제코드');
console.log(add(1)); //Nan
console.log(add(1,2)); //3
console.log(add(1,2,3)); //3

//ex
function sum(){
	var  result = 0;
	
	for(var i=0; i<arguments.length; i++){
		result+= arguments[i];
	}
	
	return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9));

/**
 *   4.4.2 호출패턴과 this 바인딩(객체참조)
 *     - 자바스크립트에서는 함수를 호출할때 기존 매개변수로 전달되는 인자값에 더해, arguments 객체 및 this인자가 함수 내부로 암묵적으로 전달된다. 
 *        
 * */

//ex 4-23 메소드 호출 사용시 this바인딩 - 자기 자신을 호출한 객체에 바인딩된다.

//myObject 객체 생성
var myObject = {
	name : 'foo',
	sayName : function(){ console.log(this.name); } 
};

//otherObject 객체 생성
var otherObject = { 
		name : 'bar' 
 };

//otherObject.sayName() 메소드  ( 객체 프로퍼티 동적 생성 ) 
otherObject.sayName = myObject.sayName;

//sayName call
myObject.sayName(); // 'foo' 
otherObject.sayName(); //'bar'

/**
 *  4.4.2.2 함수를 호출할 때 this 바인딩
 *    - 자바스크립트에서는 함수 호출시, 해당 함수 내부 코드에서 사용된 this는 전역객체에 바인딩
 *    - 브라우저에서 자바스크립트를 실행시, 전역객체는 window 객체
 *    - 내부 함수도 결국 함수이기 떄문에 함수호출로 취급되면 this전역객체에 바인딩 된다.
 */

//ex 4-24  전역객체와 전역변수의 관계를 보여주는 예제.

var foo = 'temp';
console.log(foo);
//console.log(window.foo);

//ex4-25 함수를 호출할때 this 바인딩을 보여주는 예제.
var test = 'This is test';
//console.log(window.test);
//sayFoo()함수
var sayFoo = function(){
	console.log(this.test);
}
sayFoo();


//ex4-26 내부 함수의 this바인딩 동작을 보여주는 예제코드 (문제코드)
console.log('ex4-26');
//전역변수 value정의
var value=100;
//myObject 객체 생성
var myObject2 ={
		value : 1,
		fun1 : function(){
					this.value+=1;
					console.log('fun1 called this.value : ' + this.value);
			//fun2 내부함수 
			fun2 = function(){
				this.value+=1;
				console.log('fun2() called. this.value : ' + this.value); //101
		
				//fun3 내부 함수
				fun3 = function(){
					this.value+=1;
					console.log('fun3() called. this.value : ' + this.value); //102
				}
				
				fun3();
			}
			fun2();
		}//func1
};

myObject2.fun1();

//ex4-27 내부 함수의 this 바인딩 문제를 해결한 예제코드 ( ※  보통 this를 저장하는 변수를 that으로 사용한다 ) 
//내부 함수 this바인딩
var value2=100;
var myObject3 ={
	value : 1,
	fun11 : function(){
				var that = this;
				this.value+=1;
				console.log('fun11() called this.value : ' + this.value); //2
		//fun2 내부함수 
		fun22 = function(){
			that.value+=1;
			console.log('fun22() called. this.value : ' + that.value); //3
	
			//fun3 내부 함수
			fun33 = function(){
				that.value+=1;
				console.log('fun33() called. this.value : ' + that.value);  //4
			}
			fun33();
		}
		fun22();
	}//end func11
};

myObject3.fun11();


/**
 *     4.4.2.3 생성자 함수를 호출할때 this 바인딩 (중요)
 *       - 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작함.
 *       - 원치않는 생성자 함수의 호출을 방지하기 위해서 함수의 첫 문자를 대문자로 쓰기를 권고하고 있음.
 *       - 생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가르키는 객체를
 *         자신의 프로포타입객체로 설정한다. 
 * */


//ex 4-28 생성자 함수의 동작방식

//Person() 생성자 함수 
var Person = function(name){
	//함수 코드 실행전
	this.name = name;
	//함수리턴
}
var con = new Person('con'); //con 객체 생성
console.log(con.name);

//ex 4-29 객체 생성 두 가지 방법(객체 리터럴 vs 생성자 함수) 

//객체 리터럴 방식으로 foo객체 생성
var literObj = {
		name : 'literal',
		age : 35,
		gender : 'man'
};
console.dir(literObj);

//생성자 함수 
function Person2(name,age, gender,position){
	this.name = name;
	this.age=age;
	this.gender=gender;
}

//Person2 생성자 함수를 이용해 bar객체, baz객체 생성 
var bar = new Person2('bar',33,'woman');
console.dir(bar);

var baz = new Person2('baz',25,'woman');
console.log(baz);

//ex 4-30 new를 붙이지 않고 생성자 함수 호출시의 오류.

var qux = Person2('qux',20,'man');
console.log(qux); //undefined   this는 함수호출이므로 전역객체인 window 객체로 바인딩됨. 동적으로 생성된다.
console.log(window.name);
console.log(window.age);
console.log(window.gender);












