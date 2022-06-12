
public class LoopArray {

	public static void main(String[] args) {
		
		/*
		 * <li>jinho</li>
		 * <li>jinhuck</li>
		 * <li>youbin</li>
		 * 를 출력예
		 */
		
		
		//jinho, mama, papa 
		String[] users = new String[3];
		users[0] = "jinho";
		users[1] = "mama";
		users[2] = "papa";

		for(int i=0; i<users.length; i++)  {
			System.out.println("<li>"+users[i]+"</li>");
		}
		
		
	}

}
