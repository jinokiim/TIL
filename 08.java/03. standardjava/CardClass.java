package standard.java;

public class CardClass {

	public static void main(String[] args) {
		
		
		Card c = new Card();
		c.kind = "Heart";
		c.number = 5;
		Card.width = 200;
		Card.height = 300;
		
		

	}


}

class Card{
	int number;
	String kind;
		
	static int width = 100;  //공통적으로 사용하는 변수에 Static
	static int height = 250;
	}