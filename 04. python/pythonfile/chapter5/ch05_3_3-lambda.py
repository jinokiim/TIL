# 함수 구문을 따로 작성하지 않기위해 lambda 사용
# lambda 매개변수 : 리턴값

power = lambda x : x * x
under_3 = lambda x : x < 3

list_input_a = [1, 2, 3, 4, 5]

# map, filger 함수 사용
output_a = map(power, list_input_a)
output_b = filter(under_3, list_input_a)

print("map 함수의 결과")
print("map(power, list_input_a : ", output_a)
print("map(power, list_input_a : ", list(output_a))
print()

print("filter 함수의 결과")
print("filter(power, list_input_b : ", output_b)
print("filter(power, list_input_b : ", list(output_b))
