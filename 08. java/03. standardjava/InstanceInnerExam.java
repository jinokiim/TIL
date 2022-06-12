package standard.java;

class InstanceInnerExam {
	class InstanceInner{
		int iv = 100;
		static int cv = 100;  //error! static 변수를 선언할 수 없다.
		final static int CONST = 100;// final static은 상수이므로 허용.
	}
	class StaticInner{
		int iv = 200;
		static int cv = 200; //static 클래스만 static멤버를 정의할 수 있다.
	}
	void myMethod() {
		class LocalInner{
			int iv = 300;
			static int cv = 300;   //error! static변수를 선언할 수 없다.
			final static int CONST = 300; // final static은 상수이므로 허용.
		}
	}
	

	public static void main(String[] args) {
		
		System.out.println(InstanceInner.CONST);
		System.out.println(StaticInner.cv);
//		System.out.println(LocalInner.CONST);//error! 지역 내부 클래스는 지역내부에서만 사용 가능.

	}
}
