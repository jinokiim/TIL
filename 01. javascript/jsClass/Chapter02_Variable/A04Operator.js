
console.log('---------------- Comparison Operator -----------------');

var x = 10;
var y = 3;

var result = x > y;
console.log('x > y => ' + result);

result = x >= y;
console.log('x > y => ' + result);
console.log('');


// 동등 비교
result = x == y;
console.log('x > y => ' + result);

result = x != y;
console.log('x > y => ' + result);
console.log('')

// 일치 비교
// 자바스크립트 엔진이 형 변환을 해보고 값이 같으면 TRUE로 표시
var x = true;
var y = 1;

result = x == y;
console.log('true == 1 => ' + result);

// '===' 는 형 변환을 하지 않고 비교(즉 타입까지 체크)
console.log(x===y);

// 3항 연산자
var name = 'jinho';
result = (name === 'jinho') ? '진호' : '누군지 모름';
console.log(result);