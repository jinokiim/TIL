// 한줄주석

/*
    여러줄 주석
    이다.
*/

// console: 전역 객체
console.log('()안의 값을 브라우저의 console 안에 출력해준다.')

var x = 10;
var y = 20;
console.log(x);
console.log(''); // 줄바꿈

console.warn('경고 메시지가 필요한 경우');
console.error('에러 메시지가 필요한 경우');
console.info('안내 메시지가 필요한 경우');
console.log('');

// ()안의 문자열이 동일해야 한다.
console.time('시간 체크');
for(var i = 0; i < 1000000; i++){ }
console.timeEnd('시간 체크');
console.log('');

// 문자열 출력
console.log('Hello');
console.log('Hello:' + y);

// "", '' 는 한번만 교차 사용 가능
console.log("Hello I'm 'Shin'");
console.log('');

//문자열과 + 로 연결하면 결과는 문자열이 된다.
console.log('Hello ' + 10 + 20);

//연산자 우선순위에 의해 ()가 먼저 연산된다.
console.log('Hello ' + (10 + 20));
console.log('');

//여러개의 값을 한버에 나누어 출력
// console.log를 여러번 출력한 것과 동일.
console.log('Hello',x,10);
console.log('');


