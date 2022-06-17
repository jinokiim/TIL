package standard.java;

class AAA { //AAA 는 BBB의 외부클래스.
	int i = 100;
	BBB b = new BBB();
	
	class BBB { ///BBB는 AAA의 내부클래스. AAA안에서만 사용가능.
		void method() {
//			AAA a = new AAA();
//			System.out.println(a.i);
			System.out.println(i); //객체생성 없이 외부 클래스 접근 가능.
		}
	}
}



//class CCC {
//	BBB b = new BBB();
//}


public class InnerTest {

	public static void main(String[] args) {
		
//		AAA a = new AAA();
//		a.method();

	}

}
