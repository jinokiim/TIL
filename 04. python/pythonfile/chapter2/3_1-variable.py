# 변수 만들기
pi = 3.141592       # 3.141592 라는 값을 pi 라는 이름에 저장

print(pi)
print(pi - 2)
print(pi * 2)
print(pi / 2)
print(pi * pi)
print()

# 원의 둘레와 넓이 구하기

# 변수 선언과 할당
pi = 3.14
r = 10

# 확인 및 계산
print("원주율 = ", pi)
print("원의 반지름 = ", r)
print("원의 둘레 = ", 2 * pi * r)
print("원의 넓이 = ", pi * r * r)
print()

# 복합 대입 연산자
# a += 10  | a = a + 10   
# a -= 10  | a = a - 10     * + 와 - 는 문자열에서도 사용 가능
# a *= 10  | a = a * 10
# a /= 10  | a = a / 10
# a %= 10  | a = a % 10
# a **= 10 | a = a ** 10
n = 10
n += 10     # 새로운 n = 기존의 n + 10 로 대체 
n += 30
print(n)
print()
a = "hello"
a += "!"
print(a)

print()
