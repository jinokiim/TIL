
console.log('---------------- Map ES6 -----------------');

let myMap = new Map([
    [0, 'Nolbu'],
    [1, 'Hungbu'],
    [2, 'BangJa']
]);

// 크기
console.log(myMap.size, myMap);
console.log('');

//추가
myMap.set(3, 'Hangdan');
console.log(myMap.size, myMap);
console.log('');

//삭제
myMap.delete(3);
console.log(myMap.size, myMap);
console.log('');

//참조
console.log(myMap.get(2));
console.log('');

// 순환
for(let item of myMap) {
    console.log(item, item[0], item[1]);
}

// 값을 묵을 목적으로 사용한다.
let tv = [
    {id: 1, company: 'Samsung', model: 'ABC', price: 1000},
    {id: 2, company: 'Lg', model: 'LG-1', price: 200},
    {id: 3, company: 'Samsung', model: 'S-500', price: 300},
];

let phone = [
    {id: 1, company: 'Samsung', model: 'S22', price: 22000},
    {id: 2, company: 'Lg', model: 'LG-1', price: 15000},
    {id: 3, company: 'Samsung', model: 'S10', price: 30000},
];


const product = new Map ([
    ['tv', tv],
    ['phone', phone],
])

let getTV = product.get('tv')
let getPhone = product.get('phone')

console.log(product);
console.log(getTV);
console.log(getPhone);
