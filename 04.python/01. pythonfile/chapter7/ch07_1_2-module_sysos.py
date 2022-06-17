# sys module : 시스템과 관련된 정보를 가지고 있는 모듈
import sys

# 명령 매개변수를 출력
print(sys.argv)
print("---")

# 컴퓨터 환경과 관련된 정보를 출력
print("copyright : ", sys.copyright)
print("---")
print("version : ", sys.version)

# 프로그램을 강제로 종료
# sys.exit()


# os module : 운영체제와 관련된 기능을 가진 모듈
import os

# 기본 정보 출력
print("현재 운영체제 : ", os.name)
print("현재 폴더 : ", os.getcwd())
print("현재 폴더 내부의 요수 : ", os.listdir())

# 폴더를 만들고 제거        * 폴더가 비어잇을때만 제거가능
os.mkdir("hello")
os.rmdir("hello")

# 시스템 명령어 실행
os.system("dir")
