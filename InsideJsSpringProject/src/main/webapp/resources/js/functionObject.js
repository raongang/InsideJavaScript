
/** extend() - 객체에 자신이 원하는 객체 혹은 함수를 추가.
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
	//console.log(F.prototype);
	return new F();
}

function extend(student,added){
	if(!added) { added = student, student = this; } //this : window객체
	for(var i in added){
		console.log('student['+i+'] >>' + student[i]);
		console.log('added['+i+'] >>' + added[i]);
		
		student[i] = added[i]; //객체접근방식
	}
	return student;
	
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
//student.setAge(25);
//console.log(student.getAge());

