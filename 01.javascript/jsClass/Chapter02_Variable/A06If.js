
console.log('---------------- Conditional Statument -----------------');


console.log('');


var kor, eng, avg;
kor = 100;
eng = 60;
avg = (kor + eng) / 2;

// 단순 IF
if(avg>80) {
    console.log('if 합격');
}



// IF ~ ELSE
if(avg>80){
    console.log('if 합격');
} else{
    console.log('불합격');
}




// 다중 IF
if(avg>80){
    console.log('if 합격');
} else if(avg>70){
    console.log('재시험 1번');
}else if(avg>60){
    console.log('재시험 2번');
}else if(avg>50){
    console.log('불합격');
}

// switch
var year = 2000;
var month = 2;
var day = 0;

switch(month){
    case 1:
        day = 31;
        break;
    case 2:
        day = 28;
        break;
    default:
        day = 31;
        break;
}
console.log(day)

