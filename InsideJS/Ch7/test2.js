/**
 *  apply,call,bind
 *    - 자바스크립트에서는 함수 호출시, 해당 함수 내부 코드에서 사용된 this는 전역객체에 바인딩
 *    - 브라우저에서 자바스크립트를 실행시, 전역객체는 window 객체
 *    - 내부 함수도 결국 함수이기 떄문에 함수호출로 취급되면 this전역객체에 바인딩 된다.

	
function Shape(){
	this.x = 0;
	this.y = 0;
}

Shape.prototype={
		move : function(x,y){
			//console.log(this);
			var self = this;
			
			this.x += x;
			this.y += y;
			
			console.log(this.x);
			console.log(this.y);
			
			function checkBounds(){
				if(self.x > 100 ){
					console.log('warning');
				}
			}//end f
			checkBounds();
		}//end m
};

var shape = new Shape();
shape.move(101,1);
 */


func.prototype.printData = function(){
	console.log('a >> ' + this.a);
	console.log('b >> ' + this.b);
}

function func(){
	var a=0;
	var b=1;
};

var temp = func.printData;
temp();





