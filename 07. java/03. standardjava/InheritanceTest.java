package standard.java;


class MyPoint{
	int x;
	int y;
}

class Circle1 extends MyPoint{ //상속
	int r;
}

class Circle2{//포함
	MyPoint p = new MyPoint(); //참조변수 초기화
	int r;
}



public class InheritanceTest {

	public static void main(String[] args) {

		Circle1 c1 = new Circle1();
		c1.x = 1;
		c1.y = 2; 
		c1.r = 3;
		System.out.println(c1.x);
		System.out.println(c1.y);
		System.out.println(c1.r);
		
		Circle2 c2 = new Circle2();
		c2.p.x = 4;
		c2.p.y = 5;
		c2.r = 6;
		System.out.println(c2.p.x);
		System.out.println(c2.p.y);
		System.out.println(c2.r);

	}

}
