
console.log('---------------- Arguments -----------------');

// 함수 내부에서 매개변수를 관리하기 위해 만들어지는 유사 배열이다.
// 자바스크립트는 함수의 매개변수를 체크하지 않는다.

function onADD(x, y) {
    // console.log(arguments);
    // console.log(arguments[0]);
    let result = 0
    for(let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    console.log(`Arguments Length: &{arguments.length} / Total: ${result}`);
}

onADD();
onADD(10, 20, 30, 40, 50, 60);
onADD(10, 20, '30')  //이러면 뒤에 붙어버린다.
console.log('');

function onADD1(x) {
    // console.log(arguments);
    // console.log(arguments[0]);
    let result = 0
    for(let i = 0; i < arguments.length; i++) {
        let num = Number(arguments[i]);
        if(isNaN(num)) {
            continue;
        }
        result += arguments[i]
    }
    console.log(`Arguments Length: &{arguments.length} / Total: ${result}`);
}

onADD1(10, 20, '30', 'a')


//ES6

function onADD2(x, ...rest) {
    // console.log(arguments);
    // console.log(arguments[0]);
    let result2 = 0

    for(let i = 0; i < rest.length; i++) {
        let num = Number(rest[i]);
        if(isNaN(num)) {
            continue;
        }
        result2 += rest[i]
    }
    console.log(`Arguments Length: &{arguments.length} / Total: ${result2}`);
}

onADD2('합계', 10, 20, '30', 'a')