# 날짜, 시간 활용하기

# 날짜, 시간과 관련된 기능을 가져옵니다.
import datetime

# 현재 날짜와 시간을 구합니다.
now = datetime.datetime.now()

# 출력합니다.
print(now)
print(now.year)
print(now.month)
print(now.day)
print(now.hour)
print(now.minute)
print(now.second)
print()
# format 을 이용
print("{}년 {}월 {}일 {}시 {}분 {}초".format(
    now.year, now.month, now.day, now.hour, now.minute, now.second
))

