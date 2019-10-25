
/** extend() - 객체에 자신이 원한느 객체 혹은 함수를 추가.
    jQuery extend() 구현

jQuery.extend = jQuery.fn.enxtend = function(obj,prop){
	if(!prop) { prop = obj; obj = this; }
	
	for(var i in prop) obj[i] = prop[i];
	return obj;
}*/

//ex6-6
var person = {
	name : 'zzoon',
	getName : function(){
		return this.name;
	},
	setName : function(arg){
		this.name = arg;
	}
};

function create_object(o){
	function F(){};
	F.prototype = o;
	return new F();
}


function extend(obj,prop){
	
	console.log(obj); //{}
	console.log('------------');
	console.log(prop);
	console.log('------------');
	
	if(!prop) { prop = obj, obj = this; } //this : window객체
	
	console.log(prop);

	
	for(var i in prop){
	
		console.log(obj[i]);
		console.log(prop[i]);
		
		obj[i] = prop[i]; //객체접근방식
	}
	return obj;
}

var student = create_object(person);

var added = { 
		setAge : function(age){
			this.age = age;
		},
		getAge : function(){
			return this.age;
		}
};

extend(student,added);
student.setAge(25);
console.log(student.getAge());



/* 테스트모듈
var ori =  function F(){};
console.log(ori);
console.dir(ori);

var added2 = { 
		setAge : function(age){
			this.age = age;
		},
		getAge : function(){
			return this.age;
		}
};

added2=ori;
console.log(added2);
console.dir(added2);
*/


