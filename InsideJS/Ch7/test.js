//function sum(num1,num2){
//	return num1+num2;
//}

//console.log(sum(1,2)); 3
//console.log(sum.call(this,1,2)); 3

/*
type="zero";

var type1 = { type:  "one" };
var type2 = { type : "two" };

function getType(){
	console.log(this.type);
}

//getType();
getType.call(null);
*/


function test(thisArg){
	console.log(undefined || 3);
}

test();


