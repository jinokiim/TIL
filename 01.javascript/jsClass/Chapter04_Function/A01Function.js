
console.log('---------------- 함수 선언문 -----------------');

// 호이스팅
// 변수 -> 메모리 확보에 undefined로 초기화
// 함수 -> 메모리 확보가 되고 평가식도 같이 초기화 된다.
console.log(x);   //undefined
onMin(100, 200);   //함수는 아래것을 이용해 undefined가 아님

var x = 10;


// 선언문 방식의 함수 선언
// 일반 함수
// function 함수명([매개변수]) {
//     실행구문
// }
function onAdd() {
    let x = 10;
    let y = 20;
    console.log(this);   //global 영역에서 호출

    let result = x + y;
    console.log(`${x} + ${y} = ${result}`);
};
// 함수의 호출
onAdd();


// 매개변수가 있는 함수.
function onMin(x, y) {
    console.log('매개변수가 있는 함수');
    let result = 0;
    if (x > y) {
        result = x - y;
    } else {
        result = y - x;
    }
    console.log(`${x} 와 ${y}의 차이 = ${result}`);
}
onMin(10, 2);
onMin(2, 10);


// 반환값이 있는 함수.
function onMulti(x, y) {
    console.log('반환값이 있는 함수');
    if(typeof(x) !== 'number' || typeof(y) !== 'number') {
        return 0;
    } else {
        return x * y
    }
}
const result = onMulti(10, 2);
const str = onMulti(10, '2');
console.log(result, str);


// 반환값이 없는 함수. => undefined 확인.
function onDiv(x, y) {
    let result = x / y;
    console.log(`${x} / ${y} = ${result}`);
}

const div = onDiv(10, 2);
console.log(div);   //return이 없으니 undefined