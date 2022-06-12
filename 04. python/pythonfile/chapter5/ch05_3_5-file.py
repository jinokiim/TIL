# 파일 처리를 하기위해서 일단 파일 열기를 해야한다.
# 파일 객체 = open(문자열 : 파일경로, 문자열 : 읽기모드)   * w : write 모드 | a : append 모드 | r : read 모드
# 파일을 닫을때는 
# 파일객체.close()

# 간단한 예제
# 파일을 열기
file = open("basic.txt", "w")
# 파일에 텍스트 작성
file.write("Hello Python Programming...!")
# 파일 닫기
file.close()


# with 를 사용하여 close() 생략 가능
# with open(문자열 : 파일경로, 문자열 : 모드) as 파일 객체:

# 텍스트 읽기
# 파일 객체.read()
