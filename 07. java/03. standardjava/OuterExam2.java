package standard.java;

class Outer3{
	int value = 10;
	
	class Inner{
		int value = 20;
		
		void method1() {	
			int value = 30;
			System.out.println("value : "+ value);
			System.out.println("this.value : "+ this.value);
			System.out.println("Outer3.this.value : "+ Outer3.this.value);
		}
	}//Inner클래스의 끝.
}//Outer3클래서의 끝.

public class OuterExam2 {
	public static void main(String args[]) {
		Outer3 outer3 = new Outer3();
		Outer3.Inner inner = outer3.new Inner();
		inner.method1();
	}
}
