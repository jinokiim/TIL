
console.log('---------------- Array 반복 메서드 -----------------');

var ary = [10, 11, 100, 101, 1000];



console.log('---------------- Array For -----------------');
for(let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}


console.log('---------------- Array ForEach -----------------');
ary = [10, 11, 100, 101, 1000];
console.log('ary = [10, 11, 100, 101, 1000];');
ary.forEach(function(item, index){
    console.log(item, index);
})
console.log('');


// 한줄로 기술할때 => 뒤의 구문이 값이 아니면 실행. 값인 경우만 return을 해준다.
ary.forEach((item, index) => console.log(item, index));
console.log('');

console.log('---------------- Array map -----------------');
// 배열의 값을 forEach와 같이 순차적으로 1개씩 순서대로 꺼내 콜백 함수에 대입해준다.
ary = [10, 11, 100, 101, 1000];
let x = ary.map(function(item, index) {
    console.log(item, index);
    return item * 2;
})
console.log(x);
console.log('');

// react에서 많이 사용되는 구문
// arrow함수의 주의점 중 하나
x = ary.map((item, index) => ({i: index, value: item}) );

x = ary.map((item, index) => {
    return {i: index, value: item * 2}
});
console.log(x);
console.log('');


console.log('---------------- Array filter -----------------');
// 걸러내는 작업을 한다.
// 따라서 조건문이 필요하고 조건이 true인 요소만 모아서 배열로 만들어 리턴한다.
ary = [10, 11, 100, 101, 1000];
x = ary.filter(function(item, index) {
    if(item % 2 == 0) return true;
    else return false;
})
console.log(x);




console.log('---------------- Array reduce -----------------');
ary = [10, 11, 100, 101, 1000];

x = ary.reduce(function(init, item){
    let total = 0;
    total = init + item;
    return total;
}, 0);  // 0이 init값 처음 1번만 반영
console.log(x);


var names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa',]
x = names.reduce((obj, item) => {
    if(!obj[item]) {     //obj['NolBu']
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj
}, {});
console.log(x);

