// name1이란 변수에는 string type만 들어올 수 있다.
// type 종류 : string, number, boolean, null, undefined, bigint, [], {} 등
let name1: string = "kim";

// name1 = 123;  // -> 에러

// names는 배열이고 string만 배열에 올수있다.
let names: string[] = ["kim", "park"];

// object 타입지정시 / name? 로 쓴다면 -> name속성이 들어올수도 있고 없을수도있다는 의미(불확실할때)
let names1: { name: string } = { name: "kim" };

// 다양한 타입이 오게하려면
let name2: string | number = "kim";
name2 = 123; // 오류 X

// string | number 가 길다면 변수로 선언 가능
type SnN = string | number;
let name3: SnN = 1234;

// 함수에서의 타입지정           리턴할 타입
function double(x: number): number {
  return x * 2;
}

// array 에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john: Member = [123, true];

// object
type Members = {
  // 모든 object속성    // 글자로 된 모든 object 속성의 타입은 string
  [key: string]: string;
};
let marry: Members = { name: "kim", age: "23" };

// class 타입지정
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
