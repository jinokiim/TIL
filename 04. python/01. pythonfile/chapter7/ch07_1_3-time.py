# datetime module : 날짜, 시간 과 관련된 모듈로 날싸 형식을 만들때 자주사용
import datetime

# 현재 시각을 구하고 출력하기
print("현재 시각")
now = datetime.datetime.now()
print(now)
print(now.year, "년")
print(now.month, "월")
print(now.day, "일")
print(now.hour, "시")
print(now.minute, "분")
print(now.second, "초")
print()

# 특정 시간 이후의 시간 구하기
print("datetime.timedelta 로 시간 더하기")
after = now + datetime.timedelta(\
    weeks = 1, \
    days=1,\
    hours=1,\
    minutes=1,\
    seconds=1,\
    )
print(after.strftime("%Y{} %m{} %d{} %H{} %M{} %S{}").format(*"년월일시분초"))
print()

# time module
import time
print("지금부터 5초 동안 정지")
time.sleep(5)
print("프로그램을 종료합니다.")
