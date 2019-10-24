/** 1.객체 프로퍼티 접근
   - 존재하지 않는 프로퍼티에 접근시 undefined 값 출력됨.
   
    2. 객체
      - 모든 자바스크립트 객체는 자신의 프로토타입(부모객체)을 가리키는 [[Prototype]]라는 내부프로퍼티를 가진다.
*/

var foo = {
    name : 'foo',
    major : 'computer science'
};

//객체 프로퍼티 read
console.log("프로퍼티 Read");
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname); //undefined

//객체프로퍼티 갱신
console.log("프로퍼티 갱신");
foo.major = 'enginnering';
console.log(foo.major);
console.log(foo['major']);

//객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

//대괄호 표기법만을 사용해서 접근해야 하는 경우
console.log("대괄호 표기법(특수문자가 있을 경우");
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
// NaN(Not a Number) -수치연산을 해서 정상적인 값을 얻지 못할 경우 출력
// full.full - undefiend , full.name - undefined => undefined - undefined = NaN
//console.log(foo.full-name);//error
console.log(1-'hello'); // Nan
console.log(foo.full);
console.log(foo.name);

// 2. for in 문
var foo = {
   name : 'foo',
   age : 30,
   major : 'computer science'
};

//for in 문을 이용한 객체 프로퍼티 출력
console.log("for in example");
var prop;
for(prop in foo){
    console.log("prop : " + prop);
    console.log(prop,foo[prop]);
}

//3. 객체의 프로퍼티 삭제
var foo = {
    name : 'foo',
    nickname : 'babo'
};

delete foo.nickname;
console.log(foo.nickname);
delete foo; //객체는 삭제 안됨
console.log(foo.name);




