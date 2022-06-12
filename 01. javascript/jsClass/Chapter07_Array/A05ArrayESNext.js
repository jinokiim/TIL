
console.log('---------------- Array Callback -----------------');

// ES6
var ary = new Array(10);        // empty * 10
ary.fill(0, 0)    //0으로 초기화, 0번째부터
console.log(ary);

ary.fill('A', 2, 7);  //A로 초기화 2번째부터 7번째까지
console.log(ary);


// includes    -> true false 반환
ary = [01, 11, 100, 101, 1000]
console.log(ary.includes(100));
console.log(ary.includes(123));
console.log('');


console.log('---------------- Array find, findIndex -----------------');
// javascript에서 가장 많이 사용되는 형태
var objArray = [
    {id: 1, name: 'NolBu', age: 35}, 
    {id: 2, name: 'BangJa', age: 18}, 
    {id: 3, name: 'HungBu', age: 25}
];

function findItem(index) {
    return objArray[index];
};

let x = findItem(3);   // 배열에서는 3번째 인덱스가 존재하지 않음
console.log(x);

x = findItem(2);
console.log(x);

console.log('');

console.log('findIndex');
//id와 매칭되는 인덱스 번호를 가져오자
x = objArray.findIndex((item, index) => item.id === 3)
console.log(x);

x = objArray.findIndex((item, index) => item.age === 18)
console.log(x);

console.log('find');
// item을 통째로 리턴
x = objArray.find((item, index) => item.id === 2)
console.log(x);