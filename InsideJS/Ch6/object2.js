/**
 *   6.2 상속
 *    1) 객체 프로토타입 체인을 통한 상속구현.
 *      - 클래스 기반 전통적인 상속방식 흉내
 *      - 클래스 개념없이 객체의 프로토타입으로 상속을 구현(프로토타입을 이용한 상속)
 */

/**
 *  6.2.1 프로토 타입을 이용한 상속
 */

//ex6-4 , ex6-5 상속구현 예  - 인자로 들어온 객체를 부모로 하는 자식 객체를 생성해서 반환

//객체리터럴 생성
var person = { 
		name : 'zzoon',
		getName : function() {
			return this.name;
		},
		setName : function(arg){
			this.name = arg;
		}
};

//console.dir(person);

/* 
 * 중요)
 * 함수를 정의하면 함수가 생성되며 Prototype object가 같이 생성 됩니다.  ( 크롬기준 prototype : {constructor:f})
 * 생성된 Prototype object는 함수의 prototype 속성을 통해 접근할 수 있습니다. 
 * (Prototype object같은 경우 함수 생성시에만 됩니다. 일반 객체 생성시에는 생성되지 않습니다.)
*/

function create_object(o){
	function F(){}
	F.prototype=o; 
	return new F();
}

var student = create_object(person); //person 객체를 상속하여 만듬.
student.setName("me");
console.log(student.getName());
//console.dir(student);











