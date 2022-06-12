
console.log('---------------- Spread Operator -----------------');
/*
    ES6 비 구조화 할당(DeStructuring)
    배열, 객체, 반복 가능한 객체에서 값을 꺼내 그 값을 별도의 변수에 대입하는 구문.
*/

var ary = [10, 11, 100, 101, 1000, 1001];
const [a, b, c] = ary;
console.log(a, b, c);

// ary배열의 뒤의 4개 요소만 가져오기
const [, , d, e, f, g] = ary;
console.log(d, e, f, g);

// 중간것 빼고
const [h, , i, , j] = ary
console.log(h, i, j);

// 남는 값은 모두 배열로 받아 가져오자
const [k, l, m, ...rest] = ary;
console.log(k, l, m, rest);

//배열안의 배열 값
const [n, o, [p, q]] = [10, 11, [100, 101]]
console.log(n, o, p, q);

// 값 치환
let x = 10;
let y = 20;
[y, x] = [x, y]
console.log(x, y);
console.log('');


var objArray = [
    {id: 1, name: 'NolBu', age: 35}, 
    {id: 2, name: 'BangJa', age: 18}, 
    {id: 3, name: 'HungBu', age: 25}
];

[x, y, z] = objArray;
console.log(x);   //{id: 1, name: 'NolBu', age: 35}, 
console.log(y);   //{id: 2, name: 'BangJa', age: 18}
console.log(z);   //{id: 3, name: 'HungBu', age: 25}



var obj = {
    name: 'NolBu',
    age: 30,
    address: 'Seoul',
    getName: function(){
        return this.age
    }
}

let {name, age, address, getName}  = obj;
console.log(name, age, address);

//getName이라는 변수는 함수값이 할당되어 있다.
//함수는 this가 선언되는 곳에 의해 동적으로 변경된다.
//let getName = function() {return this.name}

window.age = 100;
console.log(getName());



