//ex5-5
/*
var value="value1";

function printFunc(){
	var value = "value2";
	
	function printValue(){
		return value;
	}
	console.log(printValue());
}
printFunc(); // value2
*/

//ex5-6
//최초 실행시 전역 실행 컨텍스트가 만들어지고, 변수객체(활성객체)가 생성됨. 이때, [[scope]]는 전역객체를 가르킨다.
/*
var value="value1";

function printValue(){
	return value;
}

function printFunc(func){
	var value="value2";
	console.log(func());
}

printFunc(printValue); //value1		
*/

//NOTE_함수 호이스팅의 이해


//foo();
bar();
var foo= function(){									
	console.log("foo and x = " + x);
	
};

function bar(){
	console.log("bar and x = "  + x);
}

var x = 1;

