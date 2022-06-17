
console.log('---------------- 함수 표현식 -----------------');

// 변수이므로 undefined가 할당. 함수 형식으로 호출할 수 없음.
// onAdd();

// 함수 표현식. 익명함수를 이용한다. 이름을 붙이면 기명함수라 한다.
// 표현식 방식의 함수 선언(익명함수)
var onAdd = function() {
    let x = 10;
    let y = 20;
    // console.log(this);

    let result = x + y;
    console.log(`${x} + ${y} = ${result}`);
};

onAdd();


let factorial = function(n) {
    if(n===1) return 1;
    return n * factorial(n-1)
}
console.log(factorial(10));
console.dir(factorial);


// 표현식 방식의 함수 선언(기명함수)
// 익병함수에 함수이름을 기술하면 내부에서만 사용 가능하다.
let factorial1 = function fact(n) {
    if(n===1) return 1;
    return n * factorial1(n-1)
}
console.log(factorial1(10));
// console.log(fact(10));   // error
console.dir(factorial1);



// Function 생성자 함수 이용
var onMin = new Function('x', 'y', 'return x - y')
console.log(onMin(10, 2));