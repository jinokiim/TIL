# format(  ) 함수

a = "{}".format(10)
b = "{} {}".format(30, 50)
c = "{} {} {} {} {}".format("hi", 101, 273, "동물", 2 + 3)

print(a)
print(b)
print(c)
print(type(c))      # str 자료형이다.
print()

# 특정한 방법으로 출력
# 기본
a = "{}".format(52)
print(a)
print()
# 특정한 칸에 출력
b = "{:5d}".format(52)
c = "{:10d}".format(52)     # 5칸, 10칸에 출력
print(b)
print(c)
print()
# 빈칸을 0으로 채우기
d = "{:05d}".format(52)
print(d)
print()
# 기호화 함께 출력
e = "{:+d}".format(52)
f = "{:+d}".format(-52)
print(e)
print(f)
print()
# 정수일땐 d , 소수일땐 f 이용

# 소수점 출력 관련  {00.xf} : 00칸 뒤에 소수 x자리까지 출력  /  소수점 제거 {:g}
g = "{:5.3f}".format(13.23742863)
print(g)
print()

# 대소문자 바꾸기 : upper(), lower()
a = "Hello Python Programming...!"
print(a.upper())
print(a.lower())
print()

# 문자열 찾기
# find() : 왼쪽부터 찾아서 처음 시작하는 위치 표시
# rfind() : 오른쪽부터 찾아서 처음 시작하는 위치 표시
a = "hello, hello, world".find("hello")
print(a)

b = "hello, hello, world".rfind("hello")
print(b)

print()

# 문자열과 연산자
# 문자열 내부에 어떤 문자열이 있는지 확인할때 사용 : True / False 로 출력
print("hello" in "hello, world")
print("goodbye" in "hello, world")
print()

# 문자열 자르기 : split()
# 띄어쓰기를 기준으로 문자들을 잘라 리스트(list)로 표시
a = "10 20 30 40 50 60".split()
print(a)

