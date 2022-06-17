
console.log('---------------- let, const -----------------');

var nickname = 'NolBu';
var nickname = 'HungBu';   // 재 정의 에러 아님(덮어쓴다.)

{
    // 함수를 제외하고 {  } 범위를 갖지 않는다. if, for, while, switch
    var nickname = 'BangJa';
}
console.log("nickname: " + nickname);
console.log('');

console.log(window);


// let -> ECMA 2015(ES6)
// hosting은 이루어지지만 변수가 저장되는 객체가 다르다
// let TDZ(Template Dead Zone) 이라는 영역에 저장된다.
let A1 = 'LET Global'
let alert = 'Hello World';
// window.alert('Let Scople')   // 정상 실행됨. 


// 값이 변경되는 변수를 선언
let x = 10;

// 1. 선언한 변수는 재선언 할 수 없다.
// let x = 20; -> error

// 2. 모든 {  } 범위를 갖는다.
let y = 20;
if(true){
    let y = 'Hello World';
    let z = 100;
    console.log('if block y -> ', y)
    console.log(z);
}
// console.log(z);  -> error
console.log('global y -> ', y);


// const -> ES2015 (es6)
// 상수를 정의. 대문자로 정의한다.

const MY_PI = 3.1415;

// MY_PI = 100;    // error 값변경 안됨
console.log(MY_PI, typeof(MY_PI));

