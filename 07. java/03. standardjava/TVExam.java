package standard.java;

class TV{
	int channel = 0;
	String color = "";
	boolean power = false;
	
	void power(){
		power = !power; 
	}
	
	void channelUp() {
		channel +=1;
		System.out.println(channel);
	}
	
	void channelDown() {
		channel--;
		System.out.println(channel);
	}
	
	void say() {
		System.out.println("test");
	}
}

public class TVExam {

	public static void main(String[] args) {
		
		TV tv = new TV();
		tv.channel = 0;
		System.out.println(tv.channel);
		tv.power();
		tv.channelUp();
		System.out.println(tv.channel);
		

	}


}
