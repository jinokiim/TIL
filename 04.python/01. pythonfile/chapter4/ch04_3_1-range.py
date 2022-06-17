# 범위 range

# 1. range(A)  # A = 숫자
    # 0 부터 A-1 정수로 범위를 만든다.
a = range(5)
print(list(a))
print()

# 2. range(A, B)
    # A 부터 B-1 까지의 정수로 범위를 만든다.
b = range(3, 7)
print(list(b))
# 이때 6을 반드시 포함해야한다는 의도를 보이고 싶으면
# range(3, 6 + 1) 로 표현
print()

# 3. A 부터 B-1 까지 정수로 범위를 만드는데, 앞뒤의 숫자가 C 만큼의 차이를 가진다.
    # range(A, B, C)
c = range(0, 10, 2)
print(list(c))
print()

# for 반복문과 range
# for 숫자 변수 in range
for i in range(5):
    print(str(i) + " 는 " + str(i + 1) + "번째 출력입니다.")
print()

# for 반복문과 list 와 range 조합하기

array = [273, 32, 103, 57, 52]      # list 선언하기
for element in array:               # list 에 반복문 적용
    print(element)                  # list element 출력
print()

for i in range(len(array)):         # list 의 length 만큼 range 를 준다
    print("{}번째 요소 : {}".format(i, array[i]))
print()





