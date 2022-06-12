# 숫자 입력
print(273)
print(52.273)
print()

# type check
print(type(52))         # 정수(interger)
print(type(52.273))     # 실수(float)
print(type(0))          # int
print(type(0.0))        # float
print()

print(0.52273e2)        # 0.52273 * 10^2
print(0.52273e-2)       # 0.52273 * 10^-2
print()

# 연산자 
# + : 더하기
# - : 빼기
# * : 곱하기    |   ** : 제곱
# / : 나누기    |  // : 나눠서 정수만 표현    |   % : 나머지

# 문자열 연산자의 우선순위

print("안녕" + "하세요" * 3)
# 안 녕 하 세 요 하 세 요 하 세 요
print()

print(("안녕" + "하세요") * 3)
# 안 녕 하 세 요 안 녕 하 세 요 안 녕 하 세 요
print()

# 연습문제
# 3462 를 17 로 나누었을때 몫과 나머지를 구하기
print("3462 를 17로 나누었을때의")
print(" - 몫 : ", 3462 // 17)
print(" - 나머지 : ", 3462 % 17)
print()


