# fibonacci_recursion01 에서 fibonacci(35)를 구하는데 3초 소요
# 시간 소요되는 이유를 알기위해 counter 사용

counter = 0
def fibonacci(n):
    print("fibonacci({})를 구합니다.".format(n))
    global counter
    counter += 1
    if n == 1:
        return 1
    
    if n == 2:
        return 1
    
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
fibonacci(10)
print("-----")
print("fibonacci(10) 계산에 활용된 덧셈 횟수는 {}번입니다.".format(counter))
