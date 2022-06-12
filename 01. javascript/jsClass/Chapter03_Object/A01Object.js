
console.log('---------------- Object -----------------');

// var nolbu = 'NolBu';
// var kor = 100;
// var eng = 80;
// var total = kor + eng;
// var avg = total / 2;
// console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
// console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
// console.log('');

// 객체 Object를 이용하여 하나의 이름으로 묶는다.
let jinho = new Object();
jinho.name = '진호';
jinho.kor = 90;
jinho.eng = 90;
jinho.total = jinho.kor + jinho.eng;
jinho.avg = jinho.total / 2;

console.log(jinho.total);
console.log(jinho.avg);
console.log(`${jinho.name}의 총점은 ${jinho.total} 이고 평균은 ${jinho.avg}입니다.`);


// new Object()를 { }로 변경해서 묶을 수 있다.
var hangDan = {
    name: '향단',
    kor: 40,
    eng: 80,
    // 함수 이외의 { }영역의 this는 window 영역
    // total: this.kor + this.eng,
    // avg: this.total / 2,   //마지막 ,는 es6부터는 에러 아님
}


console.log(hangDan);
console.log(`${hangDan.name}의 총점은 ${hangDan.total} 이고 평균은 ${hangDan.avg}입니다.`);

console.dir(hangDan);


// Object 는 key: value 쌍의 집합이다.
// key는 javascript의 변수 명명 규칙을 따른다.
// 그렇지 않은 경우는 문자열로 이름을 정의한다.
//key가 number면 문자열로 자동 치환한다.
// 문자열의 key값은 '객체명[문자열]' 형태로 참조

const bangJa = {
    name: '방자',
    'bangja-kor': 90,
    'bangja-eng': 50,
    100: 150,
}

console.log(bangJa);
console.log(bangJa['bangja-kor']);

const hong = {
    name: '홍길동',
    kor: 80,
    eng: 85,

    //객체 내부에 객체의 프로퍼티 값을 참조하는 함수를 메서드라고 한다.
    total: function() {
        return this.kor + this.eng;
    },
    avg: function(){
        return this.total() / 2
    }
}

console.dir(hong);
console.log(hong.total());
console.log(hong.avg());