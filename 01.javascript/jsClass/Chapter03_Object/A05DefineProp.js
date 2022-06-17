
console.log('---------------- defineProperty -----------------');

function printObject(data) {
    for (const prop in data) {
        console.log(prop, data[prop]);
    }
};

var obj = {
    name: 'NolBu',
    age: 30
};

obj.address = 'Suwon'
obj.tel = '010-0000-4666'
// Object.defineProperties

printObject(obj)
console.log('');

console.log(Object.getOwnPropertyDescriptor(obj, 'address'));
console.log(Object.getOwnPropertyDescriptor(obj, 'tel'));
console.log(obj);

//기본값을 설정
Object.defineProperty(obj, 'product', {
    value: 'TV',
    writeable: true,
    enumerable: true,
    configurable: true
})

// writable
obj.tel = '000-0000-0000';
obj.product = 'Phone';
console.log(obj);


//configurable
delete obj.tel;
delete obj.product;
console.log(obj);
console.log('');

// enumerable
printObject(obj)
console.log('');

// Getter, Setter도 정의 가능
Object.defineProperty(obj, 'nickname', {
    enumerable: false,
    configurable: false,
    get() {                 //value
        return this.name
    },
    set(name) {
        this.name = name;           //writable
    }
});

console.log(obj);
console.log('');

//여러개를 한번에 정의
const person = {};
Object.defineProperties(person, {
    name: {value: 'HungBu'},
    age: {value: 20, writable: true, enumerable: true, configurable: false},
    info: {
        enmerable: false,
        configurable: false,
        get() {
            return `%{this.name} / ${this.age}`
        },
        set() {
            this.name = obj.name;
            this.age = obj.age;
        }
    }
});
console.log(person);