# input으로 숫자를 받아도 string 이므로 이후 숫자연산이 불가능 하다
# 따라서 문자열을 숫자로 변환해야 한다.(cast)

# int() : string 을 int 자료형으로 변환
# float() : string 을 float 자료형으로 변환

string_a = input("첫번쨰 숫자 입력> ")
int_a = int(string_a)              # 입력받은 string 자료를 int 자료로 변환

string_b = input("두번째 숫자 입력> ")
int_b = int(string_b)

print("입력된 숫자 :", string_a, string_b)
print("첫번쨰 숫자 + 두번째 숫자", int_a + int_b)
print()
# 실수를 이용하려면 int 대신 float 사용

# 숫자를 문자열로 바꾸기
# str(다른 자료형)

output_a = str(52)
output_b = str(52.273)
print(output_a, type(output_a))
print(output_b, type(output_b))
print()

# 확인문제
print("inch -> cm 변환기 ")
str_input = input("인치 입력>")
num_input = float(str_input)

print()
print("입력한 ",num_input, "inch 는")
print((num_input * 2.54), "cm")
print()

