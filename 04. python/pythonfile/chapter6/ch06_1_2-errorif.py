# 기본 예외 처리
# 예외를 처리하는 방법
#   - 조건문 사용
#   - try 구문 사용

# if 로 예외처리하기
pi = 3.14
get_r = input("정수 입력 > ")

if get_r.isdigit():     # input이 정수인지 확인
    number_get_r = int(get_r)    # 정수라면 int 로 변환
    print("원의 반지름 : ", number_get_r)
    print("원의 둘레 : ", 2 * pi * number_get_r)
    print("원의 넓이 : ", pi * number_get_r * number_get_r)

else :
    print("정수를 입력하지 않았습니다.")

