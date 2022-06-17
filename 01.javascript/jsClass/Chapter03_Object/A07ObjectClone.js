
console.log('---------------- Object Clone, Spread Operator -----------------');

var objA = {
    name: 'NolBu',
    age: 30
};

var objB = {
    address: 'Seoul',
    age: 100
}

// shallow Clone

// 프로토타입 상속(복사)
const one = Object.create(objA);
one.name = '흥부';
// [[Prototype]]을 확인
console.log(one);
console.log(one.name, one.age);
// console.log(Object.defineProperties(one));

// 복사 clone
const two = Object.assign({}, objA);
console.log(two);
console.log(two == objA);  //복사이므로 같다는 개념은 아니라 false
console.log('');

//동일한 속성이 있으면 복사되는 객체의 값으로 덮어쓴다.
//objA 자체가 변경된다.(복사가 아닌 변경개념)
const three = Object.assign(objA, objB)
console.log(three);
console.log(objA);
console.log('');

// ECMA2015(ES6) Spread Operator
var objC = {
    name: 'NolBu',
    age: 30
};

var objD = {
    address: 'Seoul',
    age: 100
}

// 복사  / ...-> 내용물을 펼치는 느낌
const four = {...objC};
console.log(four);
console.log('');

const five = {id: 1, ...objC}
console.log(five);
console.log('');

const six = {...objC, ...objD}
console.log(six);
console.log('');

var objE = {
    name: 'NolBu',
    age: 30,
    info: {
        tel: '010-1234-5678', 
        address: 'Seoul'
    }
};

console.log('---얕은 복사---');
const seven = {...objE}

seven.name = '방자';
seven.info.tel = '010-0000-0000';  // 위의 objE까지 전부 바뀜.
console.log(objE);
console.log(seven);
console.log('');

console.log('---깊은 복사---');
const deep = {
    ...objE,
    info: {
        ...objE.info
    }
}

deep.name = '향단';
deep.info.tel = '010-1234-5678';  // 위의 objE까지 전부 바뀜.
console.log(objE);
console.log(deep);