var foo = {
    name : 'foo',
    major : 'computer science'
};

//객체 프로퍼티 read
console.log("프로퍼티 Read");
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname); //undefined
console.dir(foo);