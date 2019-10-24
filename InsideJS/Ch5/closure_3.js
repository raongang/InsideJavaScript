 
/**
 *  5.4.2.2 함수의 캡슐화
 */
//ex5-11
/*
var buffAr = [ //전역변수이기 때문에, 배열이 외부로 노출되어 있음.
	'I am',
	'',
	'. I live in ',
	'',
	'. I\'am ',
	'',
	' years old.',
];

function getCompletedStr(name,city,age){
	buffAr[1]=name;
	buffAr[3]=city;
	buffAr[5]=age;
	
	return buffAr.join('');
}

var str = getCompletedStr('zzoon','seoul',16);
console.log(str);
*/

//ex5-12 클로저와 즉시함수를 이용한 5-11의 문제점 해결 

//getCompletedStr : 익명의 함수를 즉시실행시켜 반환되는 함수를 할당
var getCompletedStr = (function (){ //즉시함수
	var buffAr = [ //자유변수
		'I am ',
		'',
		'. I live in ',
		'',
		'. I\'am ',
		'',
		' years old.',
	];
	
	return function(name,city,age){ //클로저
		buffAr[1] = name;
		buffAr[3] = city;
		buffAr[5] = age;
		return buffAr.join('');
	};
	
})();

var str = getCompletedStr('ring','seoul',28);
console.log(str);


/**
 *  5.4.2.3 setTimeout()에 지정되는 함수의 사용자 정의
 *    - 웹 브라우저 함수로 첫번째 인자 : 함수 실행의 스쥴링 / 두번째 인자 : 시간간격설정 
 *    
 */

function callLater(obj,a,b){
	return (function(){
		obj["sum"] = a+b;
		console.log(obj["sum"]);
	});
}

var sumObj = { 
		sum : 0 
}

var func = callLater(sumObj,1,2);
setTimeout(func,500);





