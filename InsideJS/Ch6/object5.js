
/**
 *  6.3 캡슐화.
 */

//ex6-9.  정보은닉
/*
var Person = function(arg){
	var name = arg ? arg : 'zzoon'; //private
	
	this.getName = function() { return name; }    //public 
	this.setName = function(arg) { name = arg; } //public
};

var me = new Person();
console.log(me.getName());
me.setName("test");
console.log(me.getName());
console.log(me.name); //접근 불가 undefined 
*/

//ex6-10. 모듈패턴
/*
var Person = function(arg){
	var name = arg ? arg : 'zzoon'; //private
	
	// private 멤버(name)에 접근할수 있게, 메소드를 묶어서 반환.
	// 문제점 : 멤버가 객체나 변수이면 얉은 복사로 참조값만 반환하므로 값이 쉽게 바뀔 수 있다.
	return {
		getName : function(){ return name; },
		setName : function(arg) { name = arg; }
		
	};
}
var me = Person();
//var me = new Person();
console.log(me.getName());
*/

/*
//ex6-11. 6-10의 얇은 복사의 문제를 보여주는 예제.
var ArrCreate = function(arg){
	var arr = [1,2,3];
	return {
		getArr : function() { return arr; }
	};
}

var obj = ArrCreate();
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr()); //[1,2,3,5]
*/

//ex6-12. 6-10의 객체반환에서 함수 반환으로 변경 -- 이해 안됨.

var Person = function(arg){
	var name = arg ? arg : 'zzoon'; //private
	var Func = function(){}
	Func.prototype = {
			getName : function(){ return name; },
			setName : function(arg) { name = arg; }			
	};
	return Func;
}();

var me = new Person();
console.log(me.getName());






