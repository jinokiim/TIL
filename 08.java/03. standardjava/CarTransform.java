package standard.java;

public class CarTransform {

	public static void main(String[] args) {
		
		Car car = null;
		Car car2 = null;
		FireEngine fe = new FireEngine();
		FireEngine fe2 = null;
		
		fe.water();
		car = (Car)fe;
//		car.water(); //에러.
		fe2 = (FireEngine)car; //자손타입 -> 조상타입
		fe2.water();
		
		car2 = (Car)fe;
		car2.drive();
//		car2.water(); // 에러.
		

	}

}

class Car{
	String color;
	int door;
	
	void drive() {//운전하는 기능.
		System.out.println("drive, Brrrr~");
	}
	
	void stop() {//멈추는 기능.
		System.out.println("stop!!!");
	}
}

class FireEngine extends Car{
	void water() {
		System.out.println("water!!!");
	}
}
