/**
 *  7.3.3 bind 
       - 함수와 객체를 묶는다.
function.prototype.bind = function(thisArg){
	var fn = this,  //여기 this는 windows 객체 ( 4.4.2.2 함수를 호출할 때 this 바인딩 참고 ) 
	slice = Array.prototype.slice,
	args = slice.call(arguments,1);
	return function(){
		return fn.apply(thisArg,args.concat(slice.call(arguments)));
	};
}

//ex7-9 
var print_all = function(arg){
	for(var i in this) console.log('this ' + i+ " : " + this[i]);
	for(var i in arguments) console.log('arguments ' + i+ " : " + arguments[i]);
}

var myobj = { name : 'zzoon'};

var myfunc = print_all.bind(myobj);
myfunc(); // "name : zzoon' 출력

var myfunc1 = print_all.bind(myobj,"iamhjoo","others");
myfunc1("insidejs");
*/

/**
 *   7.3.4 랩퍼 함수. (이해안됨 패스)
 *     - 특정 함수를 자신의 함수로 덮어 쓰는거.  
 *     - 객체 지향의 다형성과 유사함.


//ex7-10
function wrap(object, method, wrapper){
	var fn = object[method];
	console.log(fn);
	
	return object[method] = function(){
		return wrapper.apply(this,[fn].concat(
				Array.prototype.slice.call(arguments)));
	};
}

Function.prototype.original = function(value){
	this.value = value;
	console.log('value : ' + this.value);
}

var mywrap = wrap(Function.prototype,"original",function(orig_func,value){
	this.value=20;
	orig_func(value);
	console.log('wrapper value : ' + this.value);
});
var obj = new mywrap('zzoonnnn');
//출력 value : zzoonnnn wrapper value : 20
 */

/**
 *  7.3.5 반복함수
 */

/*  7.3.5.1 each
 */

//ex7-11  jQuery 1.0 의 each()함수
// undefined || 3 => 3

function each(obj,fn,args){
	if(obj.length == undefined){
		for(var i in obj){
//			console.log('obj[i] >> ' + obj[i]);
//			console.log('[i,obj[i]] >> ' + [i,obj[i]]);
			fn.apply(obj[i], args || [i,obj[i]]);
		}
	}else{
		for(var i=0; i< obj.length; i++){
//			console.log('obj[i] >> ' + obj[i]); 
//			console.log('[i,obj[i]] >> ' + [i,obj[i]]); 
			fn.apply(obj[i], args || [i,obj[i]]);
		}
	}
	return obj;
};

each([1,2,3], function(idx,num){
	console.log('this >> ' + this);
	console.log(idx + " : " + num);
});

//var zzoon = {
//		name : 'test',
//		age : 30,
//		sex : 'Male'
//};
//
//each(zzoon, function(idx,value){
//	console.log(idx + " : " + value);
//});


/*  7.3.5.2 map
 */



