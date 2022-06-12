# list 에 적용할 수 있는 기본 함수 
# min() : list 내부에서 최솟값을 찾는다.
# max() : list 내부에서 최댓값을 찾는다.
# sum() : list 내부에서 값을 모두 더한다.
list_a = [273, 104, 52, 32, 77]
print(min(list_a))
print(max(list_a))
print(sum(list_a))
print()

# reversed() : list 에서 element 순서를 뒤집는다.
list_b = [1, 2, 3, 4, 5]
list_reversed_b = reversed(list_b)
print(list(list_reversed_b))
print()

# enumerate() : element 가 몇번째 index 인지 확인할때 사용
list_c = ["a", "b", "c", "d", "e"]
print(list(enumerate(list_c)))

# dictionarty 와 반복문 조합
dictionary_a = {
    "keyA" : "elementA",
    "keyB" : "elementB",
    "keyC" : "elementC"
} 

for key, element in dictionary_a.items():
    print("dictionary[{}] : {}".format(key, element))
print()

# list 를 재조합하기
# list 의 요소를 제곱하여 새로운 리스트 만들기
array = []
for i in range(0, 20, 2):
    array.append(i * i)
print(array)
print()

# 리스트 안에 조건을 삽입
# 1. for
array_a = [i * i for i in range(0, 20, 2)]        # 최종 결과를 맨 앞에 작성(i * i)
print(array_a)
print()

#2. if
array_b = ["apple", "banana", "orange", "chocolate"]
output = [fruit for fruit in array_b if fruit != "chocolate"]
print(output)
