/** 5.4.2. 클로저의 활용 */

/**
 *  5.4.2.1 특정함수에 사용자가 정의한 객체의 메소드 연결하기.  (이건 잘 모르겠다 일단 패스한다.)
 *  
 */

//ex5-9

function HelloFunc(func){
	this.gretting = "hello";
}

HelloFunc.prototype.call = function(func){
	func ? func(this.gretting) : this.func(this.gretting);
}
var userFunc = function(gretting){
	console.log(gretting);
}
var objHello = new HelloFunc();
objHello.func = userFunc;
//console.dir(objHello);
//objHello.call();


//ex5-10

function saySomething(obj,methodName,name){
	return (function(gretting){
		return obj[methodName](gretting,name);
	});
}

function newObj(obj,name){
	obj.func= saySomething(this,'who',name);
	return obj;
}

newObj.prototype.who = function(gretting,name){
	console.log(greeting + " " +  (name || "everyone"));
}

var obj1 = new newObj(objHello,"zzoon");
obj1.call();
