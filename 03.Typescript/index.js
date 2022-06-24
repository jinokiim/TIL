// name1이란 변수에는 string type만 들어올 수 있다.
// type 종류 : string, number, boolean, null, undefined, bigint, [], {} 등
var name1 = "kim";
// name1 = 123;  // -> 에러
// names는 배열이고 string만 배열에 올수있다.
var names = ["kim", "park"];
// object 타입지정시 / name? 로 쓴다면 -> name속성이 들어올수도 있고 없을수도있다는 의미(불확실할때)
var names1 = { name: "kim" };
// 다양한 타입이 오게하려면
var name2 = "kim";
name2 = 123; // 오류 X
var name3 = 1234;
// 함수에서의 타입지정           리턴할 타입
function double(x) {
    return x * 2;
}
var john = [123, true];
var marry = { name: "kim", age: "23" };
// class 타입지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
