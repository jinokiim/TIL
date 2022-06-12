# input(    ) 를 통해 사용자로 부터 입력을 받을 수 있다. 
# (    ) 안의 데이터를 프롬프트 문자열 이라고 하며 입력을 요구하는 내용을 포함한다.
input("인사말을 입력하세요 > ")
print()

# 응용
a = input("What is your name? > ")
print("Hello, ", a)
print()

# 이때 input 에 입력된 모든 내용은 문자형(string)이다.
string = input("입력>")
print("자료 : ", string)
print("자료형 : ", type(string))
