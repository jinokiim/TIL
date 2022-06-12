# 함수를 매개변수로 전달하는 표준함수로 map() 함수와 filter()함수가 있다.
# map() 함수는 list의 요소를 함수에 넣고 리턴된 값으로 새로운 list를 구성해 주는 함수
# map(함수, list)

# filter() 함수는 list의 요소를 함수에 넣고 리턴된 값이 True인 것으로, 새로운 list 를 구성해 주는 함수
# filter(함수, list)

def power(item):
    return item * item

def under_3(item):
    return item < 3

# 변수 선언
list_input_item = [1, 2, 3, 4, 5]

# map 함수 사용
output_a = map(power, list_input_item)
print("map 함수의 실행결과")
print("map(power, list_input_item) : ", output_a)
print("map(power, list_input_item) : ", list(output_a))
print()

# filter 함수 사용
output_b = filter(under_3, list_input_item)
print("filter 함수의 실행결과")
print("filter(under_3, list_input_item) : ", output_b)
print("filter(under_3, list_input_item) : ", list(output_b))
print()
