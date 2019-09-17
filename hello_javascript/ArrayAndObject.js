/* 배열과 객체 */
//배열
var tempArray = ['orange', 'yellow', 'green'];

//console.log("Array : " + tempArray[0]);
//console.log("Array : " + tempArray[1]);
//console.log("Array : " +  tempArray[2]);

//객체
var tempObj = {
    '0' : 'orange',
    '1' : 'yellow',
    '2' : 'green'
};

/* 1.객체에 접근시 []안에는 ''문자열 형태로 적어야 함. */
console.log("=== Object Access ===");
console.log("Obj : " + tempObj['0']);
console.log("Obj : " + tempObj[0]); //JS Engine이 []안에 숫자가 올 경우 자동으로 문자열 형태로 변경해줌.
console.log("Obj : " + tempObj[1]);
console.log("Obj : " + tempObj[2]);

// 2.typeof 연산자 비교
console.log("typeof 연산자 비교");
console.log(typeof tempArray); //object( not array)
console.log(typeof tempObj); // object

// 3.length property
console.log("=== length property ===");
console.log(tempArray.length);
console.log(tempObj.length); //undefined

// 4. 표준 배열 메소드
console.log("=== Array 표준 method ===");
tempArray.push('red');
//tempObj.push('red'); // Uncaught TypeError : Object #<Object> has no method 'push'
//console.dir(tempArray);

// proto type print
var tempEmptyArray = [];
var tempEmptyObj = { };

//console.dir(tempEmptyArray.__proto__);
//console.dir(tempEmptyObj.__proto__);

/* 5. 동적 배열
   - 자바스크립트 객체이므로 인덱스가 숫자인 배열 원소 이외에도 객체처럼 프로퍼티를 추가할 수 있음.
   - length 프로퍼티는 배열요소의 인덱스에만 영향을 준다.
 */

console.log("Dynamic Array");
var dynamicArray = ['zero','one','two'];
console.log("arr.length : " + dynamicArray.length);

dynamicArray.color = 'blue';
dynamicArray.name = 'number_array';
console.log("arr.length : " + dynamicArray.length);

//배열 원소 추가
dynamicArray[3] = 'red';
console.log("arr.length : " + dynamicArray.length);

//배열 객체 출력
console.dir(dynamicArray);

//6. for in 문을 이용한 배열 객체 프로퍼티 출력 ( 모든 프로퍼티 출력 )
/*
console.log("Array for in example");
var prop;
for(prop in dynamicArray){
    console.log("prop : " + prop);
    console.log(prop,dynamicArray[prop]);
}*/

// 7. for 문을 이용한 배열 요소만 출력력
console.log("Array for example");

for(var i=0; i < dynamicArray.length; i++){
    console.log(i,dynamicArray[i]); // 0 zero 1 one 2 two 3 red
    //console.log(dynamicArray[i]);
}

// 8. 배열 프로퍼티 삭제.
console.log("Array Delete");
delete tempArray[2];
console.log("after property in array : " + tempArray); //undefined로 남아 있음.
console.log("tempArray length : " + tempArray.length);

delete tempArray;
console.log("after array : " + tempArray); // 객체 자체는 delete 안됨


// 8-1. 배열 프로퍼티 완전 삭제
/**
 *   splice(start,deleteCount, item..)
 *    start - 배열 시작 위치
 *    deleteCount - start에서 지정한 시작위치부터 삭제할 요소의 수
 *    item - 삭제할 위치에 추가할 요소
 */

var deleteTempArray = ['zero', 'one', 'two','three'];

deleteTempArray.splice(2,1);
console.log("after delete index : " + deleteTempArray);
console.log("after delete length : " + deleteTempArray.length);




