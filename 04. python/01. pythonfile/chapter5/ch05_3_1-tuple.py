# 파이썬에선 함수를 좀더 편리하게 사용할 수 있게 튜플 (tuple), 과 람다 (lamda) 기능 제공.

# 튜플 : 함수와 함께 많이 사용되는 리스트와 비슷한 자료형   
#       한번 결정된 요소는 바꿀 수 없는 것이 리스트와 다르다.
# (데이터, 데이터, 데이터, ...)

# 튜플 기초
tuple_test = (10, 20, 30)
print(tuple_test[0])
print(tuple_test[1])            # 튜플 안에 한가지 요소일때
print(tuple_test[2])            # tuple = (a, )  * ',' 를 뒤에 붙여서 선언
print()

# 튜플 선언 방법
[a, b] = [10, 20]
(c, d) = (30, 40)
print(a)
print(b)
print(c)
print(d)
print()

# 괄호가 없는 튜플 선언
tuple_test2 = 10, 20, 30, 40
print(tuple_test2)
print(type(tuple_test2))

x, y, z = 10, 20, 30
print(x)
print(y)
print(z)
print()

# 변수의 값 교환
e, f = 10, 20
print("교환전 : ", "e : ", e, "/ f : ", f)
e, f = f, e
print("교환후 : ", "e : ", e, "/ f : ", f)
print()

# 여러개의 값 리턴하기
def test():
    return (10, 20)
g, h = test()
print("g : ", g)
print("h : ", h)
