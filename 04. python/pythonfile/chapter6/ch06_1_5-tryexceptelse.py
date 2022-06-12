# try:
#   예외가 발생할 가능성이 있는 코드
# except:
#   예외가 발생했을 때 실행할 코드
# else:
#   예외가 발생하지 않았을 때 실행할 코드
# finally:
#   무조건 실행할 코드

try:
    number_input_a = int(input("정수 입력 > "))
except:
    print("정수를 입력하지 않았습니다.")
else:
    print("원의 반지름 : ", number_input_a)
    print("원의 둘레 : ", 2 * 3.14 * number_input_a)
    print("원의 넓이 : ", 3.14 * number_input_a * number_input_a)
finally:
    print("프로그램이 종료됩니다.")

# try 구문은 반드시 except 또는 finally 와 함께 사용
# else 구문은 반드시 except 구문 뒤에 사용