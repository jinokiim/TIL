# 반복문으로 파일 한줄씩 읽기

with open("randomhuman.txt", "r") as file:
    for line in file:   # 한줄씩 읽기
        # 변수 선언
        (name, height, weight) = line.strip().split(", ")

        # 데이터에 문제가 없는지 확인, 문제가 있으면 지나감
        if (not name) or (not height) or (not weight):
            continue
    
    # 결과 계산
        bmi = int(weight) / ((int(height) / 100) ** 2)
        result = ""
        if 25 <= bmi:
            result = "과체중"
        elif 18.5 <= bmi:
            result = "정상체중"
        else: 
            result = "저체중"
    
    # 출력
        print('\n'.join([
            "이름 : {}",
            "키 : {}",
            "몸무게 : {}",
            "BMI : {}",
            "결과 : {}"
            ]).format(name, height, weight, bmi, result))
        print()
