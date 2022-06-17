
console.log('---------------- Number -----------------');
var str = '123.45';
let x1 = parseInt(str);   //123
let x2 = parseFloat(str);  // 123.45
let x3 = Number(str);   //123.45

console.log(x1, typeof(x1));
console.log(x2, typeof(x2));
console.log(x3, typeof(x3));
console.log('');

str = ''
let x4 = parseInt(str);
let x5 = parseFloat(str);
let x6 = Number(str);
console.log(x4, typeof(x4));   //NaN 으로 반환
console.log(x5, typeof(x5));   //NaN 으로 반환
console.log(x6, typeof(x6));
console.log('');



let num = 12345.678945
x1 = num.toFixed(2);
console.log(x1, typeof(x1));

str = '124N';
num = 12345.678945
let check1 = isNaN(str)    // 숫자가 아니면 true
let check2 = isNaN(num)
console.log(check1);
console.log(check2);


console.log('---------------- Math -----------------');
x1 = Math.random();
x2 = Math.ceil(10.00001);
x3 = Math.floor(10.9999);

console.log(x1, typeof(x1));
console.log(x2, typeof(x2));
console.log(x3, typeof(x3));
console.log('');


console.log('---------------- Date  -----------------');

let today = new Date();     // 현재 시간
console.log(today);
console.log('');

let year = today.getFullYear();
// 0이 1월, 1이 2월 ...
let month = today.getMonth();
let date = today.getDate();

//요일. 0이 일요일, 1이 월요일 ..
let day = today.getDay();
let yoil = ['일', '월', '화', '수', '목', '금', '토']
console.log(`${year}년 - ${month+1}월 - ${date}일 - ${yoil[day]}요일`);
console.log();

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let millsec = today.getMilliseconds();
console.log(`${hour}:${min}:${sec}`);
console.log();

let x = today.toLocaleDateString();
let y = today.toLocaleTimeString();
let z = today.toLocaleString();
console.log(x);
console.log(y);
console.log(z);
console.log();

// 1970.01.01 00:00:00 부터 현재 시간까지 경과 시간을 mill초로 환산해서 돌려준다.
let times = Date.now();
console.log(times);

console.log('---------------- String  -----------------');
str = ' abc 123 DEF 456 ';

console.log(str.length);

x = str.trim();
console.log(x.length);

console.log(str.toUpperCase(), str.toLowerCase());

x = '0123456789'
console.log(x.substr(3, 6)); // 4부터 7개 추출
console.log(x.substring(4, 7)); // 4부터 7-1까지 추출

y = x.replace('123', '일이삼')
console.log(y);

y = x.indexOf('4', 4)
console.log(y);


console.log('----------- try ~ catch ------------');

try {
    if(true) {
        throw new Error('이게 표시될 에러 메시지')
    }
    console.log(abc);
} catch(err) {
    console.log(err.message);
} finally {
    console.log('이건 항상 실행됨');
}

console.log('종료');