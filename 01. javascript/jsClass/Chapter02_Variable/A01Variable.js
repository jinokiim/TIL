
console.log('---------------- Variable -----------------');

// 변수는 식별자라고도 한다.
var x = 10;
var y = 10.25;
var str = 'Jinho'

console.log('x: ' + x + ' typeof(x): ' + typeof(x));
console.log('');
x = 'Hello';
console.log('x: ' + x + ' typeof(x): ' + typeof(x));
console.log('');

//typeof()의 출력값으로 기본형 변수 이외의 값은 OBJECT로 출력된다.
x = new Date();
console.log('x: ' + x + ' typeof(x): ' + typeof(x));
console.log('');

// 변수 선언 방식
var z = 10;
var a = 1, b = 2, c = 3.5 //여러개를 동시에 선언
console.log(z, a, b, c);
console.log('');

//변수의 초기화는 나중에 해도 된다.
var d;
d = 100;
console.log(d);
console.log('');

// var 키워드는 선언한 변수를 재 선언해도 에러가 아니다.
var d = 'jinho';
console.log('d: ' +d + ' typeof(d): ' + typeof(d));
console.log('');

// 없는 변수를 선언하면 error
// console.log('e: ' +e + ' typeof(e): ' + typeof(e));

// 변수가 선언되어 있음. 값은 undefined 값으로 초기화
var f;
console.log('f: ' + f + ' typeof(f): ' + typeof(f));

// 메모리에 이미 정의는 되어있음(초기화 구문은 아직 실행 안됨)
console.log('g: ' + g + ' typeof(g): ' + typeof(g));
var g = 10;
console.log('g: ' + g + ' typeof(g): ' + typeof(g));


