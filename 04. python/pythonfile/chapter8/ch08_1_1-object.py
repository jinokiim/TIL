# python 과 같은 프로그래밍 언어는 클래스(class) 를 기반으로 객체(object)를 만들고
# 그러한 객체를 우선으로 생각해서 프로그래밍을 한다.
# 객체(object) : 여러가지 속성을 가질 수 있는 대상

# dictionary 로 object 만들기
students = [
    {"name" : "윤인성", "korean" : 87, "math" : 98, "english" : 88, "science" : 95},
    {"name" : "연하진", "korean" : 92, "math" : 98, "english" : 96, "science" : 98},
    {"name" : "구지연", "korean" : 76, "math" : 96, "english" : 94, "science" : 90},
    {"name" : "나선주", "korean" : 98, "math" : 92, "english" : 96, "science" : 92},
    {"name" : "윤아린", "korean" : 95, "math" : 98, "english" : 98, "science" : 99},
    {"name" : "윤명월", "korean" : 64, "math" : 88, "english" : 92, "science" : 92}
]

# 학생을 한 명씩 반복
print("이름", "총점", "평균", sep="\t")
for student in students:
    # 점수의 총합과 평균 계산
    score_sum = student["korean"] + student["math"] + student["english"] + student["science"]
    score_avg = score_sum / 4
    print(student["name"], score_sum, score_avg, sep="\t")
