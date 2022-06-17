
console.log('---------------- Closure -----------------');

let num = 0;

const incOne = function() {
    return num++;
};

console.log(incOne());
console.log(incOne());
console.log(incOne());
console.log(incOne());
console.log(incOne());
console.log(incOne());

num = 100;
console.log(incOne());
console.log(incOne());
console.log(incOne());

function incTwo() {
    let cnt = 0
    return cnt++;
}

// console.log(cnt);        // error
console.log(incTwo());
console.log(incTwo());
console.log(incTwo());
console.log('');

// closure
function incThree() {
    let cnt = 0;

    return function(){
        return ++cnt;
    }
    return inner;
}

const three = incThree();
console.log(three());
console.log(three());
console.log(three());
console.log(three());
console.log(three());
console.log('');

const three1 = incThree();
console.log(three1());
console.log(three1());
console.log(three1());
