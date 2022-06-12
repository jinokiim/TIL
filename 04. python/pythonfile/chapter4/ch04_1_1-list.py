# list : 여러가지 자료를 저장할 수 있는 자료
# [element, element, element, element, element] 형태로 입력
# list_a = [273, 32, 103, "string", True, False] 일때
#           [0]  [1] [2]     [3]     [4]   [5]로 위치를 취급하며 뒤에서부터 선택할땐 [-1]순
# []안에 있는 숫자를 index 라고 한다.

# 리스트 연산자
list_a = [1, 2, 3]
list_b = [4, 5, 6]
print("# list")
print("list_a : ", list_a)
print("list_b : ", list_b)
print()

print("# list 기본 연산자")
print("list_a + list_b = ", list_a + list_b)
print("list_a * 3 = ", list_a * 3)
print()

print("list 길이구하기")
print("list 의 길이 = ", len(list_a))
print()

# list 에 요소 추가하기 : append, insert
# listname.append(element) - list 뒤에 element 추가
# listname.insert(위치, element) - 지정 위치에 요소 추가

list_c = [1, 2, 3]
list_c.append(4)
print(list_c)
print()
list_c.insert(2, 8)
print(list_c)
print()

# 여러개를 추가할때
# listname.extend([list])

# 리스트 요소 제거하기
# del listname[index]
# listname.pop(index)
# listname.remove(값)
# listname.clear() - 모두 제거하기
list_d = [1, 2, 3, 4, 5]
del list_d[1]
print(list_d)
list_d.pop(3)
print(list_d)
list_d.remove(3)
print(list_d)
list_d.clear()
print(list_d)
print()

# list 내부에 있는지 확인하기 : in / not in
# 값 in listname

list_h = [1, 2, 3, 4, 5, 6, 7]

print(3 in list_h)
print(10 in list_h)
print()
