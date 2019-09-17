
/* 유사 배열 객체
*   - length 프로퍼티를 가진 객체.
*   - 객체임에도 JS 표준 배열 메소드를 사용가능.
*   -  arguments 객체나 jQuery 객체가 유사 배열 객체 형태로 되어 있음.
*/

var arr = ['bar'];
var obj = {
    name : 'foo',
    length : 1
};

//arr.push('bar2');
//console.log("arr : " + arr);
//obj.push('bar2'); // TypeError: obj.push is not a function

// 유사 배열 객체에서 apply()를 활용한 배열 메소드 호출
console.log("유사 배열 객체에서 apply()를 활용한 배열 메소드 호출");

arr.push('baz');
console.log("arr : " + arr);

Array.prototype.push.apply(obj,['baz']);
console.log("apply 적용후 : " + obj);

var prop
for(prop in obj){
    console.log("prop : " + prop);
    console.log(prop,obj[prop]);
}

