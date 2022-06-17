
public class IfApp {

	public static void main(String[] args) {
		
		System.out.println("a");
//		if(false) { // true 일때 실
//			System.out.println("1");  // dead code
//		} else {
//			if(true) {
//				System.out.println(2);
//			} else {
//				System.out.println(3);
//			}
//			
//		}
		if(false) { // true 일때 실
			System.out.println("1");  // dead code
		} else if(true) {
			System.out.println(2);
			} else {
				System.out.println(3);
			}
			
		System.out.println("b");

	}

}
