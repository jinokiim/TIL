

console.log(this);
console.log(this == window);

this.A = 10
window.A1 = 20;
A2 = 30;  // var로 선언하지 않으면 globla 영역에 정의

console.log(A3);  //undefined
// var 변수로 선언하면 함수와 Object 이외는 참조하는 this 객체에 변수 정의
var A3 = 40;

// var alert = 'Hello'    // 곂침

//재 정의 에러 아니다
var A3 = 30;
console.log(A3);

// var은 함수, 객체 이외의 { } 범위를 갖지 않음
{
    var A3 = 'Jinho';
}

// let, const로 선언된 변수는 global 영역에 만들어지지 않는다.
// console.log(A10);   //error / hosting은 발생하지만 먼저 사용할 수 없음. undefined X
var A10 = 10;

// var 변수로 선언되면 let로 중복 선언은 안된다.
// let A3 = 100;


{
    let A10 = 20;
    let A11 = 11;
    console.log('{} 내부 -> ', A10);
}  // 이 } 만나면 {}내부에 선언된 let변수는 모두 삭제된다(지역변수)

console.log('{} 외부 -> ', A10);
// console.log(A11);   // error
console.log('');

const A20 = 100;
console.log('A20 -> ', A20);
// A20 = 200;    // const 값 변경시 error

const obj = {
    name: 'Jinho'
}

obj.age = 29;

console.dir(obj);

// obj의 메모리 주소값을 바꾸는건 불가능. error
// obj = {
//     address: 'Suwon'
// }