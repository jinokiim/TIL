
console.log('---------------- Closure -----------------');

var x = 10;

function one() {
    var x = 'one';
}

function two() {
    console.log(x);
};

function three() {
    let x = 'Three X';
    let y = 'Three Y';

    function inner() {
        return x
    }

    return inner;
};

const threeIn = three();

const threeXX = threeIn();
console.log(threeXX);