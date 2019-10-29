

function Person(arg){
	this.name = arg;
}


Person.prototype.setName = function(value) { 
	console.log('value >> ' + value);
	this.name = value;
};

Person.prototype.getName = function(){
	return this.name;
};

function Student(arg){
}

var you = new Person("iamhjoo"); 
console.log('--------------------');
console.dir(you);



Student.prototype=you; //

console.log('Student.prototype');
console.dir(Student.prototype);


//Student에 1번 부분이 없다면 Person의 this에 연결됨.
var me = new Student("zzoon constructor");  //문제점 - 얘는 호출되지 않음.
console.log('me');
console.dir(me);

console.log(me.getName());
//me.setName("zzoon set Name");
//console.log(me.getName());






