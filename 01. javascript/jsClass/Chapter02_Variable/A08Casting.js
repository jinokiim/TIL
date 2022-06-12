
console.log('---------------- Casting -----------------');

// 명시적 형 변환(타입 캐스팅)
console.log('---명시적 형 변환(타입 캐스팅)---');
var x = 10;
console.log("x: " + x + ', typeof(변수명): ' + typeof(x));

var str = String(x);
console.log('str: ' + str + ', typrof(변수명): ' + typeof(str));

str = Boolean(x);
console.log('str: ' + str + ', typrof(변수명): ' + typeof(str));

x = '10';
str = Number(x);
console.log('str: ' + str + ', typrof(변수명): ' + typeof(str));
console.log('');

//global 함수 parseInt, parseFloat를 이용해서 number 타입으로 변경 가능

//Number 메서드를 이용
str = 10;
console.log('str: ' + str + ', typrof(변수명): ' + typeof(str));
str = x.toString();
console.log('str: ' + str + ', typrof(변수명): ' + typeof(str));

x = 123.456789;
str = x.toFixed(2);
console.log('str: ' + str + ', typrof(변수명): ' + typeof(str));



// 암묵적 타입 변환 (강제 타입 변환)
console.log('---암묵적 타입 변환 (강제 타입 변환)---');
var y = '' + x;
console.log("y: " + y + ', typeof(변수명): ' + typeof(y));

var check = true
var result = '' + check;
console.log("check: " + check + ', typeof(변수명): ' + typeof(check));
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));


result = check + 10;
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));

// 문자열과 + 이외의 연산은 연결이 아닌 Number로 연산됨
result = 10 - '2';
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));

result = 10 * '2';
console.log("result: " + result + ', typeof(변수명): ' + typeof(result));




