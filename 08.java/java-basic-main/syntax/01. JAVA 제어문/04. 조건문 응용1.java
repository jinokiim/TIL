
public class AuthApp {

	public static void main(String[] args) {
				
		String id = "jinho";
		String inputID = args[0];
		
		System.out.println("Hi.");
		
		//if(inputID == id) { 
		if(inputID.equals(id)) {
			System.out.println("Master!");
		} else {
			System.out.println("Who are you?");
		}

	}

}
