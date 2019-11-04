/**
 *  함수형 프로그래밍
 *   - 함수의 조합으로 작업을 수행
 *   - 순수 함수로서 외부에 아무런 영향을 주지 않는 선에서 자신의 로직을 처리하여 결과를 반환한다.
 *   - 높은 수준의 모듈화가 가능.
 *   - 중요) 작업이 이루어지는 동안에 작업에 필요한 데이터와 상태는 변경되지 않는다.
 *           변할 수 있는 건 오로지 함수.
 *           
 *   - 순수함수(Pure Function)
 *   - 고계함수(High-order Function)
 */

/*7-2 자바스크립트에서의 함수형 프로그래밍 
   - 일급객체로서의 함수, 클로저가 있기 때문에 함수형 프로그래밍 가능
*/


//ex7-1
var f1 = function(input){
	var result;
	/* 암호화 작업 수행 */
	result = 1;
	return result;
}

var f2 = function(input){
	var result;
	/* 암호화 작업 수행 */
	result = 2;
	return result;
}

var f3 = function(input){
	var result;
	/* 암호화 작업 수행 */
	result = 3;
	return result;
}

var get_encrypted = function(func){ //고계함수
	var str = 'zzoon';
	
	return function(){ //클로저  (이미 생명주기가 끝난 외부함수의 변수를 참조하는 함수)
		return func.call(null,str);
	}
}

var encrypted_value = get_encrypted(f1);
//console.log('f1 encrypted_value >> ' + encrypted_value);
var encrypted_value = get_encrypted(f2);
//console.log('f2 encrypted_value >> ' + encrypted_value);
var encrypted_value = get_encrypted(f3);
//console.log('f3 encrypted_value >> ' + encrypted_value);


/** 7.2.1 배열의 각 원소 총합 구하기 */

//ex7-2-3
function reduce(func,arr,memo){ //함수를 직접 정의.
	var len = arr.length, i = 0 , accum = memo;
	
	for(; i < len; i++){
		accum = func(accum, arr[i]);
	}
	return accum;
}

var arr = [1,2,3,4];
var sum = function(x,y){
	return x+y;
}

var multiply = function(x,y){
	return x*y;
}

//console.log(reduce(sum,arr,0)); //10
//console.log(reduce(multiply,arr,1)); //24

/** 7.3 자바스크립트에서의 함수형 프로그래밍을 활용한 주요 함수. */
/* 7.3.1 함수 적용 (apply) 
 * 
 call 과 apply 메소드를 이용한 명시적인 this 바인딩
 *    - 기능은 둘다 동일, 넘겨받는 인자의 형식만 다름. ( apply-배열형식, call-각각의 인자)
 *    - apply() 메소드를 호출하는 주체가 함수이며, apply()메소드도 this를 특정객체에 바인딩할 뿐 결국 본질적인 기능은 함수 호출.
 *    - 자바스크립트는 함수 역시 객체이다. (함수 객체의 부모역할을 하는 프로토타입 객체를 Function.prototype 객체라고 명명한다.=>함수객체)
 *    - 모든 함수의 부모객체인 Function.prototype의 객체의 메소드로 call,apply가 포함되어 있다.
 *    
 */


function PersonApply(name,age,gender){ //생성자 함수
	this.name = name;
	this.age = age;
	this.gender = gender;
}

//foo 빈 객체 리터럴 방식으로 생성
var fooEmpty = {};
/* apply 메소드 호출
   fooEmpty 가 PersonApply() 함수에서 this로 바인딩됨.
   PersonApply('fooEmpty',30,'longman') 함수를 호출하면서 this를 fooEmpty객체에 
      명시적으로 바인딩.
*/

//PersonApply.prototype =>  { constructor : f }
//console.dir(PersonApply); 
PersonApply.apply(fooEmpty,['fooEmpty',30,'longman']); 
//console.log(fooEmpty);


/* 7.3.2 커링 
 *  - 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고, 나머지를 인자로 받는 새로운 함수를 만드는 것.
*/

//ex7-7.
/**
 *    apply(), call() 
 *     - 함수호출시 각각의 상황에 따라 this가 정해진 객체에 자동 바인딩됨.
 *     - 내부적인 this의 바인딩외의 명시적으로 this를 바인딩하기 위해 사용. 
 *    
 *    형식
 *     apply(thisArg,argArray)
 *      - thisArg : apply()메소드를 호출한 함수 내부에서 사용한 this에 바인딩할 객체
 *      - argArray : 함수를 호출할때 넘긴 인자들의 배열
*/

/**
 * 	 arguments 객체를 배열형태로 만든다.
	  - slice는 begin부터 end까지(end 미포함) 에 대한 얕은 복사본을 새로운 배열객체로 반환.
	  - Array.prototype.slice.call 은 배열로 만드는 것인데 만약 두번째 파라미터가 없으면  arguments전체를 배열의 형태로 만든다. 
	 
	  - [Arguments] { '0': [Function: calculate], '1': 1 }
	 
	 뒤에 파라미터를 주면 해당 인덱스 1번째만 배열 형태로 만듬 - [ 1 ]

	 
function curry(func){
	var args = Array.prototype.slice.call(arguments,1);
	
	return function(){
		//null -> this를 대체 , window 전역객체가 됨.
		return func.apply(null,args.concat(Array.prototype.slice.call(arguments)));
	}
}

function calculate(a,b,c){
//	console.log(a,b,c);
	return a+b+c;
}

var new_func1 = curry(calculate,1);
console.log(new_func1(1,3));

//var new_func2 = curry(calculate,1,3);
//console.log(new_func2(3));
*/

//ex7-8 calculate() 함수의 첫번째 세번째 인자값 고정
function calculate(a,b,c){
	return a*+b+c;
}


function curry2(func){
	var args = Array.prototype.slice.call(arguments,1); // [1,undefined ,4] 	
	console.log(args);
	console.log(arguments);
	
	return function(){ // 클로저
		var arg_idx=0;
		for(var i=0; i< args.length && arg_idx<arguments.length; i++)  //arguments.length 는 new_func(3)에 의해 1임.
			if(args[i] === undefined){ // === 타입변환을 거치지 않음.
				args[i] =arguments[arg_idx++];
			}
		return func.apply(null,args);
	}
	
}

var new_func = curry2(calculate,1,undefined,4);
console.log(new_func(3)); //7



