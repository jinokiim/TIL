package standard.java;

public class ObjectArray {

	public static void main(String[] args) {
		
		TV[] tvArr = new TV[3];
		for(int i=0; i<tvArr.length; i++) {
			tvArr[i] = new TV();
		
		
		}
		tvArr[0].say();
	}
	
}
	
