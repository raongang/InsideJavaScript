function myFunction(){
	console.dir(arguments);
	//에러 발생 arguments.shift(); 

	var args = Array.prototype.slice.apply(arguments);
	console.dir(args);
}
myFunction(1,2,3);