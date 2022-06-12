
console.log('---------------- Closure -----------------');
// Immediately Invoked Function Expression

(function outer() {
    console.log('즉시 실행 함수1');
})();       // ; 필수

(function () {
    console.log('즉시 실행 함수2');
})();

let x = 10;
(function (num) {
    console.log('즉시 실행 함수3 -> ' + num);
})(x);

const result = (function() {
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않습니다.'
    
    return x;
})();

console.log(result);

const calc = (function () {
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않습니다.'
    
    let onAdd = function() {
        result = x + y
        return result;
    }
    let onMin = function() {
        return x - y;
    }
    let getResult = function(){
        return result;
    }

    return {
        result,
        alert,
        onPlus: onAdd,
        onMin,
        getResult
    }
})();

console.log(calc);
console.log(calc.onPlus());
console.log(calc.onMin());
console.log(calc.alert);
console.log(calc.result);  //return 될때 값이 날라간다.
console.log(calc.getresult);


(function () {
    var x = 10;
    var y = 20;
    var result = 0;
    var alert = '값이 올바르지 않습니다.'
    
    let onAdd = function() {
        result = x + y
        return result;
    }
    let onMin = function() {
        return x - y;
    }
    let getResult = function(){
        return result;
    }

    let obj = {
        result,    //0
        alert,
        onPlus: onAdd,
        onMin,
        getResult
    }
    console.log(this);
    window.myLib = obj;
})();

console.log(myLib);
console.log(myLib.onPlus());
console.log(myLib.onMin());
console.log(myLib.alert);
console.log(myLib.result);  //return 될때 값이 날라간다.
console.log(myLib.getresult);