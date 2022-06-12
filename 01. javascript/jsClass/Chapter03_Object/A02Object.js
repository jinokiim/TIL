
console.log('---------------- Object -----------------');

// var로 선언된 변수는 window(global) 영역을 오염시킨다.
// let, const -> TDZ에 선언되므로 window(global) 영역을 오염 X.
const obj = {
    name: 'NolBu',
    address: 'Seoul',
    info: function() {
        console.log(this.name + ' / ' + this.address);
    }
};

const arr = [10, 20, 30];
arr[0] = 100;  // index0 100으로 변경


// 프로퍼티 추가
obj.age = 30;
console.log(obj);

// 값 변경
obj.name = 'Jinho';
console.log(obj);

// 프로퍼티 삭제. delete 명령으로 기본형 변수는 삭제할 수 없음.
delete obj.age;
console.log(obj);

// 메서드도 추가 가능하다.
obj.display = function() {
    console.log(this.address);
}
console.log(obj);

delete obj.display;
console.log(obj);

for(let key in obj) {
    // console.log(typeof(key));
    console.log(key, obj[key]);
}