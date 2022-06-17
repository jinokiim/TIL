
console.log('---------------- OOP -----------------');

var person = 'NolBu';
var kor = 100;
var eng = 80;
var onTotal = function() {
    return kor + eng;
};
var onAvg = function() {
    return onTotal() / 2;
}
var display = function() {
    console.log(`${person} / ${onTotal()} / ${onAvg()}`);
}
display();;


const hungbu = {
    name: 'hungbu',
    kor: 100,
    eng: 80,
    onTotal: function () {
        return this.kor + this.eng
    },

    onAvg: function () {
        return onTotal() / 2;
    },

    display: function () {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }
}

hungbu.display();


// Class 함수의 이름은 대문자로 기술
function Jumsu(name, kor, eng) {  //생성자 메서드
    this.name = name;
    this.kor = kor;
    this.eng = eng;

    this.onTotal = function() {
        return this.kor + this.eng
    },

    this.onAvg = function() {
        return this.onTotal() / 2;
    },

    this.display = function() {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }
};

const bangJa = new Jumsu('방자', 80, 90);
const hangDan = new Jumsu('향단', 70, 70);
console.log(bangJa);
console.log(hangDan);
bangJa.display();
hangDan.display();


// 프로토타입 이용
function JumsuProp(name, kor, eng) {  //생성자 메서드
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    }

    JumsuProp.prototype.onTotal = function() {
        return this.kor + this.eng
    },

    JumsuProp.prototype.onAvg = function() {
        return this.onTotal() / 2;
    },

    JumsuProp.prototype.display = function() {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }


const bangJaProp = new JumsuProp('방자', 80, 90);
const hangDanProp = new JumsuProp('향단', 70, 70);

console.log(bangJaProp);
console.log(hangDanProp);
bangJaProp.display();
hangDanProp.display();
