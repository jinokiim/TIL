# 기본 예외 처리
# 예외를 처리하는 방법
#   - 조건문 사용
#   - try 구문 사용

# try except 구문을 사용하여 예외 처리
# try:
#     예외가 발생할 가능성이 있는 코드
# except:
#     예외가 발생했을 때 실행할 코드

pi = 3.14
try:
    number_get_r = int(input("정수입력 > "))

    print("원의 반지름 : ", number_get_r)
    print("원의 둘레 : ", 2 * pi * number_get_r)
    print("원의 넓이 : ", pi * number_get_r * number_get_r)

except:
    print("정수를 입력하지 않았습니다.")

# except 부분에 중요내용이 아니라면 pass 키워드를 사용하여 넘길수 있음
