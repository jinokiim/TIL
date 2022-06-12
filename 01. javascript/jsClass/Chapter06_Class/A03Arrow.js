
function onAdd() {
    let x = 10;
    let y = 20;
    let result = x + y;
    console.log(`${x} + ${y} = ${result}`);
};

// ES6에 추가된 Arrow 함수 형태
// 함수 선언문 형태는 Arrow 함수로 정의 안된다.
// 함수 표현식 방식만 Arrow 형태로 기술

const onMin = function() {
    let x = 10;
    let y = 20;
    let result = x - y;
    console.log(`${x} - ${y} = ${result}`);
};

// function을 삭제하고 매개변수 지정 ()다음에 '=>' 를 붙인다.
const onMulti = () => {
    let x = 10;
    let y = 20;
    let result = x * y;
    console.log(`${x} * ${y} = ${result}`);
};

onMin()
onMulti()


// Arrow 함수에 반환값 구문 1줄만 존재한는 경우 {}와 return 키워드를 생략하고 한줄에 기술
// 오히려 return을 쓰면 에러
const onDiv = (x, y) => x / 2

// 매개변수가 1개인 경우는 ()를 생략할 수 있다.
const onDouble = x => 2 ** x;

console.log(onDiv(10, 2));
console.log(onDouble(4));


