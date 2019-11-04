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