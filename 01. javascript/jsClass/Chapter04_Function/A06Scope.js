
console.log('---------------- Scope -----------------');

var x = 'Global';

function out(){
    var x = 'Local';
    console.log('Function IN: ', x);  //local
}
out();

console.log('Function OUT: ', x);  //global
console.log('');

// 함수가 만들어지는 순서
//1. arguments 객체 생성
//2. scope chain을 생성
//3. 내부변수 선언
//4. this 바인딩
var x = 'Global X';
var y = 'Global Y';

function outer() {
    var z = 'Outer Local z';
    
    console.log('outer x -> ', x);      //Global
    console.log('outer y -> ', y);      //Global
    console.log('outer z -> ', z);      //Local

    function inner() {
        var z = 'Inner Local z';

        console.log('outer x -> ', x);      //Global
        console.log('outer y -> ', y);      //Global
        console.log('outer z -> ', z);      //Inner Local
    }
    inner();
};

outer();
console.log('');



function foo() {
    var x = 10;
    bar();
};

function bar() {
    console.log(x);
};

bar();
foo();