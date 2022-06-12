# 랜덤하게 100명의 키와 몸무게 만들

# 랜덤한 숫자를 만들기 위해 가져옴
import random

# 간단한 이름 리스트 만들기
namelist = list("진호정준수정미지민영화주우현재")
# 파일을 쓰기모드로 열기
with open("randomhuman.txt", "w") as file:
    for i in range(100):
        # 랜덤한 값으로 변수 생성
        name = random.choice(namelist) + random.choice(namelist)
        weight = random.randrange(40, 110)
        height = random.randrange(140, 195)
        # 텍스트 작성
        file.write("{}, {}, {}\n".format(name, height, weight))
