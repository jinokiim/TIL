#   list      |  인덱스를 기반으로 저장  |  인덱스  |   변수 = []
# dictionary  |   키를 기반으로 저장    |   키    |   변수 = {}

# dictionary 선언하기
#   변수 = {
#       키: 값,
#       키: 값,
#       키: 값,
#   }

# dictionary 선언하기
dict_avengers = {
    "name" : "avengers endgame",
    "type" : "hero movie",
    "release date" : "april 4th",
    "character" : ["ironman", "thor", "cpt america", "hulk"],
    "director" : "russo"
}

# dictionary 요소에 접근하기
print("name : ", dict_avengers["name"])
print("type : ", dict_avengers["type"])
print("release date : ", dict_avengers["release date"])
print("character : ", dict_avengers["character"])
print("director : ", dict_avengers["director"])

# 값을 변경하기
dict_avengers["director"] = "joe russo"
print("director : ", dict_avengers["director"])

# dictionary 에 새로운값 추가하기
# dictionaryname['새로운 키'] = 새로운 값

# dictionary 에 요소 제거하기
# del dictionaryname['key]

# key 가 존재하는지 확인
# 1. if 를 활용
# key = input("접근하고자 하는 키 입력하시오 > ")  : 원하는 key를 입력받음
# if key in dictionary:
#    print(dictionary[key])
# else:
#    print("존재하지 않는 키")

# 2. get 함수를 이용
# value = dictionary.get("존재하지 않는 키")   : 존재하지 않는 key를 value로 확인
# print(value) : value가 없으면 None로 출력

# 반복문(for) 과 dictionary 
# for key in dictionary :
#    print(key, " : ", dictionary[key])
