# while 반복문
# while boolean 표현식:

i = 0
while i < 10:
    print("{}번째 반복문 입니다.".format(i + 1))
    i = i + 1       # i += 1
print()

# 해당하는 값 제거하기
list_test = [1, 2, 3, 1, 2] # list 선언
value = 2                   # 제거하고 싶은 값을 value 로 설정

while value in list_test:
    list_test.remove(value)
print(list_test)        # 제거 과정을 보려면 들여쓰기
print()

# 시간을 기반으로 반복
# 5초동안 반복하기
import time
number = 0

target_tick = time.time() + 5
while time.time() < target_tick:
    number += 1
print("5초동안 {}번 반복했습니다.".format(number))
print()

# while 에서 break 와 continue
# break
i = 0
while True:
    print("{}번째 반복입니다.".format(i + 1))
    i += 1
    # 반복을 종료
    input_text = input("quit??? (y/n) : ")
    if input_text in ["y", "Y"]:
        print("quit")
        break
print()

# continue
numbers = [5, 15, 6, 20, 7, 25]

for number in numbers:
    if number < 10:
        continue
    print(number)
print()


