
console.log('---------------- Array -----------------');

var ary = [10, 11, 100, 101, 1000, 11, 100];

// 배열 맨 뒤에 값 추가
ary.push(20);

// 배열 맨 앞에 값 추가
ary.unshift(20);
console.log(ary);
console.log('');

// 배열 맨 뒤에 값 삭제
ary.pop();
console.log(ary);
console.log('');

// 배열 맨 앞에 값 삭제
ary.shift();
console.log(ary);
console.log('');

// 배열의 중간 값을 수정, 삭제, 추가
// splice(시작번호, 치환 개수, 대치 또는 대입값)
ary = [10, 11, 100, 101, 1000, 11, 100];
console.log('x = ary.splice(2, 0, 200);');
x = ary.splice(2, 0, 200);    // 치환 개수가 0이면 추가
console.log(x, ary);
console.log('');

console.log('ary.splice(2, 1, 222);');
ary.splice(2, 1, 222);   // 2번째 위치에서 1개를 222로 치환
console.log(ary);
console.log('');


// 2번째 위치에서 2개를 333로 치환. 2개 222와 100이 대치되는 333으로 변경
console.log('ary.splice(2, 2, 333);');
ary.splice(2, 2, 333);
console.log(ary);
console.log('');

// 2번째 위치에서 1개를 30, 31로 치환. 1개 333이 30, 31으로 변경, 추가
console.log('ary.splice(2, 1, 30, 31);');
ary.splice(2, 1, 30, 31);
console.log(ary);
console.log('');

// 삭제는 치환값을 안주면 된다.
console.log('ary.splice(2, 5);');
ary.splice(2, 5);
console.log(ary);


ary = [10, 11, 100, 101, 1000, 11, 100];
// 뒤 부분을 작세하는것은 이렇게도 가능
console.log('ary.length = 2;');
ary.length = 2;
console.log(ary);
console.log('');

//delete로도 삭제 가능, 실질적인 값만 삭제하고 길이는 유지.
ary = [10, 11, 100, 101, 1000, 11, 100];
console.log('delete ary[3];');
delete ary[3];
console.log(ary);


console.log('---------------- Slice로 짤라내기 -----------------');
ary = [10, 11, 100, 101, 1000, 11, 100];

// 원본 배열은 그대로 유지된다.
x = ary.slice(3);    //시작번호부터 마지막까지
console.log(x, ary);


x = ary.slice(3, 5);
console.log(x, ary);

x = ary.slice(-3);
console.log(x, ary);

x = ary.slice(-5, -3);
console.log(x, ary);


console.log('---------------- Join을 이용하여 연결 -----------------');
ary = [10, 11, 100, 101, 1000, 11, 100];
let str = ary.join('-')
console.log(str, typeof(str));


console.log('---------------- concat 을 이용하여 연결 -----------------');
ary = [10, 11, 100, 101, 1000, 11, 100];
x = ary.concat(200, 300);
console.log(x, ary);



console.log('---------------- Sort -----------------');

var names = [ 'NolBu', 'BangJa', 'HungBu' ];

let sorted = names.sort();
console.log(sorted);

ary = [10, 11, 100, 101, 1000, 11, 100];
let sortAry = ary.sort();
console.log(sortAry);  // 숫자는 적용 안됨

sortAry = ary.sort((x, y) => {
    if(x > y) return 1
    else if(x > y) return -1
    else return 0
});
console.log(sortAry);