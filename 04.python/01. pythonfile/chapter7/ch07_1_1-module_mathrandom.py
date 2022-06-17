# 모듈 : 여러 변수와 함수를 가지고 있는 집합체 / 표준 모듈과 외부 모듈로 나눈다.
# 내부 모듈 : 파이썬에 기본적으로 내장되어 있는 모듈
# 외부 모듈 : 다른 사람들이 만들어서 공개한 모듈
# import 모듈 이름

# math module
# import math 후에 math. 을 입력하면 목록을 불 수 있다.

# from 구문을 사용하여 한번에 변수나 함수를 가져올 수 있다.
from math import sin, cos, tan, floor, ceil       # * 를 사용하면 모두가져오기
print(sin(1))
print(cos(1))
print(floor(2.5))
print()

# as 구문을 이용하여 모듈의 이름을 바꿀 수 있다.
# import 모듈 as 사용하고 싶은 식별자
# 예시
import math as m
print(m.sin(90))
print()

# random module
import random
print("random module 예시")

# random() : 0.0 <= x <= 1.0 사이의 floar값을 return
print("- random() : ", random.random())

# uniform(min, max) : 지정한 범위 사이의 floar 를 return
print("- uniform(10, 20) : ", random.uniform(10, 20))

# randrange() : 지정한 범위의 int return
# - randrange(max) : 0 부터 max 사이의 값을 return
# - randrange(min, max) : min 부터 max 사이의 값을 return
print("- randrange(10, 30) : ", random.randrange(10, 30))

# choice(list) : list 내부에 있는 요소를 랜덤하게 선택
print("- choice([1, 2, 3, 4, 5]) : ", random.choice([1, 2, 3, 4, 5]))

# shuffle(list) : list 의 요소들을 랜덤하게 섞음
print("- shuffle([1, 2, 3, 4, 5]) : ", random.shuffle([1, 2, 3, 4, 5]))

# sample(list, k=<숫자) : list 요소 중에 k개를 선택
print("- sample([1, 2, 3, 4, 5], k = 2) : ", random.sample([1, 2, 3, 4, 5], k = 2))
