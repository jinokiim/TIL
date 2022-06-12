
console.log('---------------- 중첩함수, 콜백함수 -----------------');
/*
함수는 일급객체
    1. 리터럴에 의해 생성 가능
    2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
    3. 함수의 인자나 리턴 값으로 사용 가능
    4. 동적으로 프로퍼티 생성 가능
*/
const arr = [10, 20, function() {return 100}]
console.log(arr[2]);

const obj = {
    name: 'nolbu',
    info: function() {
        return this.name
    }
}
console.log(obj.info());


console.log('---------------- 중첩함수 -----------------');
// 중첩함수
function outer() {
    var x = 10;
    console.log('Outer -> ', this);   // 호출이 global -> window

    function inner() {
        let y = 20;
        let result = x + y;
        console.log('Inner -> ', this);   //windows
        console.log(`${x} + ${y} = ${result}`);
    }
    inner();

}
outer();
console.log('');

//리턴 값으로 함수를 이용
function outer2(x) {
    let num = x;
    let name = 'Outer';
    function inner2() {
        return `Inner2 Function - ${num} / ${name}`
    }
    return inner2;
}
const inner2 = outer2(100);
console.log('inner2 -> ', inner2);
const result = inner2();
console.log(result);
console.log('');


// 함수의 인자나 리턴 값이 될 수 있다.
function onAdd(x, y) {
    return x + y
}
function onMin(x, y) {
    return x - y
}


const r = onAdd(10, 20)
console.log(r + 100);
console.log(r - 2);

function func(x, y, fn) {
    let result = onAdd(x, y);
    fn(result)
}

// 호출한 함수가 일차적인 작업을 완료하고, 그 이후에 각각 다른 처리 작업을 하나의 이름으로(함수) 묶어서 전달
func(20, 30, function(num) {
    console.log(num + 10);
});

func(20, 30, function(num) {
    console.log(num - 10);
});

function sumall(a, b, c) {
    return a + b + c
}

