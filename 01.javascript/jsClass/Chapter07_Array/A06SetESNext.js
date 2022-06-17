
console.log('---------------- Set ES6 -----------------');



// 중복된 데이터는 덮어쓴다. 중복허용 X
let mySet = new Set([10, 11, 100, 11, 10, 1000]);

// 크기
console.log(mySet.size);

// 값을 꺼내오는 함수는 없음
// 대신 값이 있는지는 확인 가능
console.log(mySet.has(10));
console.log(mySet.has(1));

let x = 0;
if(mySet.has(10)) {
    x = 10;
}
console.log(x);


// 값 추가
mySet.add(1000);
mySet.add(30);
console.log(mySet, mySet.size);
console.log('');

//값 삭제
x = mySet.delete(30)
console.log(x, mySet);


// 순환
for(let i = 0; i < mySet.size; i++) {
    console.log(mySet[i]);   // 값을 꺼내는 명령이 없음
}

// Set에는 index가 없어서 for문 순환이 안된다.
// Set은 value가 key역할도 한다.

let key = mySet.keys();
console.log(key);

let value = mySet.values();
console.log(value);

let entry = mySet.entries();
console.log(entry);

// iterator 객체는 next()를 이용해서 하나씩 순차적으로 참조 가능한 객체
console.log(key.next());
console.log(key.next());
console.log(key.next());
console.log(key.next());
console.log(key.next());

// 위의 next()를 for ~ of 문으로 순환 가능. done이 true가 되면 자동으로 for문을 벗어남
for(let item of value) {
    console.log(item);
}
console.log('');

for(let item of entry) {
    console.log(item);
}
console.log('');

// 배열도 iterator 객체
let ary = [10, 11, 100];

// 값만 꺼내오고자 하는 경우 편하게 사용 가능
for(let item of ary){
    console.log(item);
}