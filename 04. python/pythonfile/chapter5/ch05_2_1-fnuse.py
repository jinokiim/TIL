# 함수의 활용

# 반복문으로 팩토리얼 구하기

def factorial(n):
    output = 1
    for i in range(1, n+1):
        output *= i
    return output
print("1! = ", factorial(1))
print("2! = ", factorial(2))
print("5! = ", factorial(5))
print("10! = ", factorial(10))
print("100! = ", factorial(100))
print()

# 재귀함수 (recursion) 로 팩토리얼 구하기. 재귀란 '자기 자신을 호출하는 것' 을 의미한다.
def factorial2(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
print("1! = ", factorial2(1))
print("2! = ", factorial2(2))
print("5! = ", factorial2(5))
print("10! = ", factorial2(10))
print("100! = ", factorial2(100))
print()
