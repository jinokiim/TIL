# if / elif / else
# if 조건 : 조건이 참일때 실행할 문장
# else 조건 : 조건이 거짓일때 실행할 문장
# elif 조건 : if 와 else 조건문 사이에 입력

import datetime

now = datetime.datetime.now()
month = now.month    # datetime 을 가져오고 현재 월을 변수로 저장

if 3 <= month <= 5:
    print("봄입니다.")

elif 6 <= month <= 8:
    print("여름입니다.")

elif 9 <= month <= 11:
    print("가을입니다.")

else :
    print("겨울입니다.")

# 조건을 추후에 넣기 위해서 pass 를 이용

number = input("정수 입력 >")
number = int(number)

if number > 0:
    pass
else :
    pass
