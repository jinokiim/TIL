
console.log('---------------- Logical Operator -----------------');

var x = 10;
var y = 5;
var z = 5;
var result;

// && 는 앞에 조건이 false면 뒤를 체크하지 않음
// || 는 앞의 조건이 true면 뒤를 체크하지 않음
result = (x > y) && (x > z);
console.log('(x > y) && (x > y) => ' + result);

result = (x < y) ** (x < z++);
console.log(result, z);

// 연산자로 사용.
// undefined -> false, 값이 있으면 true
var age;

if(age){
    console.log('Ture');
} else {
    console.log('False');
}

// typeof 함수를 지원하면...( 마찬가지로 값이 있으면 true)
if(typeof(10)) {
    console.log('True');
} else {
    console.log('Flase');
}

// &&, || 를 연산자로 사용
// 앞의 값(age의 값)이 있으면 age의 값을 result 에 대입
// 없으면 뒤가 평가되서 10이라는 값을 result 에 대입
var result = age || 10;
console.log(result + 100);

// 앞의 값(age의 값)이 있으면 뒤가 평가되서 10을 result 에 대입
// 없으면 앞이 평가되서 age 값을 result 에 대입
var result = age && 10;
console.log(result + 100);

//react
// age감이 있으면 <DIV>요소가 화면에 출력
age = 10;
console.log(age && '<div>Hello World</div>');

// ** -> ES7(ECMA 2016)
var two = 2;
result = two ** 3;
console.log(result);
console.log('');

//boolean 값으로 변환
console.log(!!0);
console.log(!!10);
console.log(!!'');
console.log(!!'A');
console.log(!!undefined);
console.log(!!null);