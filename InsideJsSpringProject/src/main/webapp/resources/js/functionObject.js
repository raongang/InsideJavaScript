//ex 4-36 생성자 함수에서 명시적으로 기본타입(불린,숫자,문자열값)을 리턴했을 경우, 이를 무시하고 this로 바인딩된 객체가 리턴된다.

function IgnorePerson(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
	
	return 100;
}

var IgnoreFoo = new IgnorePerson('ignoreFoo',40,'man2');
console.log(IgnoreFoo);