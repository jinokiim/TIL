# lambda 를 직접 대입하여 코딩

list_input_a = [1, 2, 3, 4, 5]

output_a = map(lambda x: x * x, list_input_a)
output_b = filter(lambda x: x < 3, list_input_a)

print("map 함수의 결과")
print("map(power, list_input_a : ", output_a)
print("map(power, list_input_a : ", list(output_a))
print()

print("filter 함수의 결과")
print("filter(power, list_input_b : ", output_b)
print("filter(power, list_input_b : ", list(output_b))
