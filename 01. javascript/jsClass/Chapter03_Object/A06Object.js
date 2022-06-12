
console.log('---------------- Object internal Method -----------------');

var one = { name: 'NolBu', age: 30 };

// 확장 가능(속성 추가) 여부. 삭제, 읽기, 쓰기 가능
console.log(Object.isExtensible(one));
one.address = 'Seoul';
console.log(one);

// 속성 추가를 막자
Object.preventExtensions(one);
one.tel = '010-1234-5678';

// 변경은 가능
one.name = '놀부';
console.log(one);
console.log('');

// 삭제도 가능
delete one.name
console.log(one);
console.log('');

// 객체 밀봉. 프로퍼티 추가, 삭제 금지. 읽기 쓰기 가능
var two = { name: 'NolBu', age: 30 };
console.log(Object.isSealed(two));
two.address = 'Seoul';
console.log(two);

delete two.address;
console.log(two);

Object.seal(two);  //밀봉

two.address = 'Seoul';   //추가 안됨
console.log(two);
delete two.name;     //삭제안됨
console.log(two);
console.log(Object.getOwnPropertyDescriptors(two));
console.log('');

// 객체 동결. 읽기만 가능하다
var three = { name: 'NolBu', age: 30 };

console.log(Object.isFrozen(three));  // 동결 전

Object.freeze(three);
three.name = '놀부'
three.address = 'Seoul'
delete three.age;

console.log(three);
console.log(Object.getOwnPropertyDescriptors(three));

