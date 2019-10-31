/**
 *  5.4.3 클로저를 활용할때 주의사항 
*/

/**
 *   5.4.3.1 클로저의 프로퍼티값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의해야 한다.
*/

//ex5-14
function outerFunc(argNum){
	var num = argNum;
	return function(x){
		num+=x;
		console.log('num : ' + num);
	}
}

var exam = outerFunc(40);
exam(5);
exam(-10);

/**
 *   5.4.3.2 하나의 클로저가 여러 함수 객체의 스코프(유효범위를 나타내는 프로퍼티) 체인에 들어가는 경우도 있다.
 * */

//ex5-15
function func(){
	var x = 1;
	
	return { //객체생성 및 리턴
		func1 : function(){ console.log(++x); },
		func2 : function(){ console.log(-x); }
	};
};

var exam2 = func();
exam2.func1();
exam2.func2();

/**
 *   5.4.3.3 루프안에서 클로저를 활용할 때는 주의하자. (자주 발생)

//ex5-16
function countSeconds(howMany){
	
	for(var i=1; i<=howMany; i++){ //자유변수 i
		setTimeout(function(){ console.log(i); },i*1000);
	}
};


console.log('ex5-16');
countSeconds(3); //4 4 4
 */

//ex5-17

function countSecondsModi(count){
	for(var i=1; i <= count; i++){
		(function(currentI){
			setTimeout(function(){
				console.log(currentI)
			}, currentI*1000);
		}(i));
	}
};
console.log('ex5-17');
countSecondsModi(3);





