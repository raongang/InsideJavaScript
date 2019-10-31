

function calculate(a,b,c){
//	console.log(a,b,c);
	console.log(a+b+c);
	return a+b+c;
}

Function.prototype.curry = function(){ // __prototype__ 에 함수추가.
	var fn= this,  args = Array.prototype.slice.call(arguments);
	
	return function(){
		console.log("arguments-------------->");
		console.log(arguments);
		return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
	};
};

var temp = calculate.curry(1);
console.log('temp------------------>');
console.dir(temp);
var test = temp(1,2);
