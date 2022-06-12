# 식별자 뒤에 ()가 있으면 '함수'이다.
# print(), str(), int() 등은 모두 함수.
# function(A) 의 결과가 B 에서, A 를 매개변수(parameter), B 를 반환값(return value)라고한다.

# 함수의 기본(정의만들기)
def print_3times():
    print("안녕하세요")
    print("안녕하세요")
    print("안녕하세요") 

print_3times()
print()

# 매개변수를 이용
# def 함수이름(매개변수, 매개변수, ...):
#   문장
def print_ntimes(value, n):
    for i in range(n):
        print(value)

print_ntimes("hello", 5)
print()

# def 함수이름(매개변수, 매개변수, ..., *가변매개변수)
def print_ntimes2(n, *values):
    for i in range(n):
        for value in values:
            print(value)
        print()
print_ntimes2(3, "hello", "python", "programming")
print()

def print_ntimes3(value, n = 2):
    for i in range(n):
        print(value)
print_ntimes3("hello world")
print()

# return
def return_test():
    print("A")
    return          # return 을 만나면 이후는 실행하지 않고 종료
    print("B")
return_test()
print()



