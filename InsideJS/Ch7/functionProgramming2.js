
//ex7-7을 prototype 을 이용하여 변경한 예제.

function calculate(a,b,c){
	return a+b+c;
}

Function.prototype.curry = function(){ // __prototype__ 에 함수추가.
	var fn= this,  args = Array.prototype.slice.call(arguments);
	
	return function(){
		//apply는 인자값이 배열형태 [] 로 들어가고 call은 각각의 인자값 형태로 이용한다.
		//  ex. PersonApply.apply(fooEmpty,['fooEmpty',30,'longman']);  
		//      PersonApply.call(fooEmpty,'fooEmpty',40,'shortman');
		
		return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
	};
};

var temp = calculate.curry(1);
console.dir(temp);
var test = temp(1,2);
console.log(test);


