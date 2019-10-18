//ex-43 프로토타입 객체 변경 
console.log('prototype change');
function ChaPerson(name){
	this.name = name;
}

console.log(ChaPerson.prototype.consturctor);
var chaFoo = new ChaPerson('chaFoo');
console.log(chaFoo.country);

