/** 5.4.2. 클로저의 활용 */

/**
 *  5.4.2.1 특정함수에 사용자가 정의한 객체의 메소드 연결하기. 
 */
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
console.dir(objHello);
objHello.call();
