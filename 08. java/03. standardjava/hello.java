package standard.java;

class TVexam{
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

public class hello {

	public static void main(String[] args) {
		
		TVexam tv = new TVexam();
		tv.channel = 0;
		System.out.println(tv.channel);
		tv.power();
		tv.channelUp();
		System.out.println(tv.channel);

	}

}
