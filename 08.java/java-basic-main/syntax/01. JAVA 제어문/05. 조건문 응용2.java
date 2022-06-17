
public class AuthApp {

	public static void main(String[] args) {
				
		String id = "jinho";
		String inputId = args[0];
		
		String pass = "1111";
		String inputPass = args[1];
		
		
		System.out.println("Hi.");
		
		//if(inputID == id) { 
//		if(inputId.equals(id)) {
//			if(inputPass.equals(pass)) {
//				System.out.println("Master!");
//			} else {
//				System.out.println("Wrong password!");
//			}
//		} else {
//			System.out.println("Who are you?");
//		}
		if(inputId.equals(id) && inputPass.equals(pass)) {
				System.out.println("Master!");
			} else {
			System.out.println("Who are you?");
		}

	}

}
