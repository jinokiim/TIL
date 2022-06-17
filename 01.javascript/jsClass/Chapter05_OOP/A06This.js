
console.log('---------------- Object this -----------------');

const obj = {
    name: 'NolBu', 
    age: 20,
    display() {
        console.log(`${this.name} / ${this.age}`);
    }
};
console.log(obj.name, obj.age);
obj.display();


function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.display = function() {
    console.log(`${this.name} / ${this.age}`)
};

const nolbu  =new Person('NolBu', 30);
nolbu.display();

const hungbu  =new Person('HungBu', 30);
hungbu.display();