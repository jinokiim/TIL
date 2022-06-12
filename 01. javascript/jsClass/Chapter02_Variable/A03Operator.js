
console.log('---------------- Operator -----------------');

var x = 10;
var y = 3;

// 이항 산술 연산자
var result = x + y;
console.log(x + ' + ' + y + ' = ' + result);

result = x - y;
console.log(x + ' - ' + y + ' = ' + result);

result = x * y;
console.log(x + ' * ' + y + ' = ' + result);

result = x / y;
console.log(x + ' / ' + y + ' = ' + result);

result = x % y;
console.log(x + ' % ' + y + ' = ' + result);
console.log('');


// 단항 산술 연산자. ++, --
var z = 10;
z = z + 1;
console.log(z);

z++;
console.log(z);
console.log('');

++z;
console.log(z);
console.log('');

z = 10;
var result = ++z;
console.log(z, result);  // z: 11, result: 11
console.log('');


z = 10;
var result = z++;
console.log(z, result);  // z: 11, result: 10
console.log('');

x = 10;
y = 20;
result = ++x + y++;
console.log(x, y, result);  // x: 11, y: 21, result: 31



// 할당 연산자. +=, -=, *=, /=, %=

// Math
// 0~ 1사이의 난수 발생
console.log(Math.random());

var random = Math.random() * 5;
console.log(random);

//올림
//내림
console.log(Math.ceil(10.001));
console.log(Math.floor(9.999));

var random = Math.random() * 5;
console.log(random);
console.log(parseInt(random));


//문자열이지만 숫자부분까지 숫자로 변환
// 시작이 문자면 안됨 -> NaN (숫자가 아니다)
// number()은 문자가 변환되어 있으면 변환 안됨.(NaN)
var str = '10.25a'
console.log(parseInt(str) + 10, parseFloat(str) + 10, Number(str) + 10);  

// 빈 문자열의 경우 parseInt, parseFloat -> NaN
// Number -> 0으로 치환.
str = '';
console.log(parseInt(str) + 10, parseFloat(str) + 10, Number(str) + 10);  

