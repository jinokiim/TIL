# 예외 객채(Exception)
# try:
#   예외가 발생할 가능성이 있는 구문
# except 예외의 종류 as 예외 객체를 활용할 변수 이름:
#   예외가 발생했을때 실행할 구문

# Value error : 변환될 수 없는 값을 입력한 경우 발생
# Index error : list 의 길이를 넘는 index를 입력한 경우 발생

list_number = [52, 273, 32, 72, 100]

try:
    number_input = int(input("정수입력 > "))
    print("{}번째 요소 : {}".format(number_input, list_number[number_input]))
except ValueError as exception:
    print("정수를 입력해주세요!")
    print("exception : ", exception)
except IndexError as exception:
    print("리스트의 인덱스를 벗어났어요!")
    print("exception : ", exception)
except Exception as exception:
    print("알수없는 오류가 발생했습니다.")
    print("exception : ", exception)
    