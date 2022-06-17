
console.log('---------------- Array -----------------');

var nolbu = 'NolBu';
var kor = 100;
var eng = 80;
var total = kor + eng;
var avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

let onTotal = (kor, eng) => kor + eng;
let onAvg = (total) => total / 2;
let display = (total, avg) => `총점은 ${total}/ 평균은 ${avg}`
const hungbu = [90, 80, 0, 0, onTotal, onAvg, display]
hungbu[2] = hungbu[4](hungbu[0], hungbu[1]);
hungbu[3] = hungbu[5](hungbu[2]);
const result = hungbu[6](hungbu[2], hungbu[3]);
console.log(result);
console.log('');



console.log(hungbu);

// 배열
const arr = [10, 11, 100, 101, 1000]
console.log(arr);

const arrTwo = new Array();
console.log(arrTwo);

// []를 이용하여 값을 추가
arrTwo[0] = 1
arrTwo[3] = 3
console.log(arrTwo);

// 배열은 타입을 혼합해서 넣을 수 있다.
const arrFour = [10, 'NolBu', true, undefined, null, function(){return 100}, new Date()]
console.log(arrFour[0]);
console.log(arrFour[1]);
console.log(arrFour[2]);
console.log(arrFour[3]);
console.log(arrFour[4]);
console.log(arrFour[5]);
console.log(arrFour[6]);
