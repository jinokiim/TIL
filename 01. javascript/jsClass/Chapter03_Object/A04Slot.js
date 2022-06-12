
console.log('---------------- Internal Slot, Method -----------------');

var obj = {
    // 데이터 프로퍼티
    firstName: 'Hong', 
    lastName: 'GilDone',
    age: 30,
    role: 1,
    display: function() {
        console.log(`${this.firstName} / ${this.lastName}`)
    },

    // 접근자 프로퍼티 => 정의는 함수 형태로 하고 사용은 프로퍼티 형태로 한다.
    get fName () {
        return this.firstName
    },

    set fName(str) {
        if(obj.role>0 && typeof(str) === 'string') {
            this.firstName = str;
        };
    }
};

console.dir(obj);
console.log(obj.firstName, obj.fName);
obj.fName = 'Kim';
console.log(obj.firstName, obj.fName);
console.log('');

console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));   // 표준

console.log(Object.getOwnPropertyDescriptor(obj, 'age'));
console.log(Object.getOwnPropertyDescriptor(obj, 'firstName'));
console.log('');
Object.defineProperty(obj, 'firstName', {writable: false})
console.log(Object.getOwnPropertyDescriptor(obj, 'firstName'));

obj.firstName = '박';
console.log(obj.firstName, obj.fName);
obj.fName = '김';
console.log(obj.firstName, obj.fName);