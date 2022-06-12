# class 는 object를 좀더 효율적으로 생성하기 위해서 만들어진 구문이다.
# class 클래스 이름:
#   클래스 내용

# 클래스 이름과 같은 함수를 생성자(constructor)라고 부른다. 클래스 내부에 __init__ 라는 함수를 만들면
# 객체를 생성할 때 처리할 내용을 작성 할 수 있다.
# class 클래스 이름:
#   def __init__(self, 추가적인 매개변수):
#      pass

# 메소드(method) : class 가 가지고 있는 함수
# class 클래스 이름:
#   def 메소드 이름(self, 추가적인 매개변수):
#     pass

# objet3 항목을 class와 method를 이용하기

# class 선언
class Student:
    def __init__(self, name, korean, math, english, science):
        self.name = name
        self.korean = korean
        self.math = math
        self.english = english
        self.science = science

    def get_sum(self):
        return self.korean + self.math + self.english + self.science
    
    def get_avg(self):
        return self.get_sum() / 4

    def to_string(self):
        return "{}\t{}\t{}\t".format(\
            self.name,\
            self.get_sum(),\
            self.get_avg())

students = [
    Student("윤인성", 78, 98, 88, 95),
    Student("연하진", 92, 98, 96, 98),
    Student("구지연", 76, 96, 94, 90),
    Student("나선주", 98, 92, 96, 92),
    Student("윤아린", 95, 98, 98, 98),
    Student("윤명월", 64, 88, 92, 92)
]
print("이름", "총점", "평균", sep="\t")
# 한 명씩 반복
for student in students:
    print(student.to_string())