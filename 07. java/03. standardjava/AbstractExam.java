package standard.java;


abstract class Player{
	boolean pause;   		//일시정지 상태를 저장하기 위한 변수 
	int currentPos;			//현재 play되고 잇는 위치를 저장하기 위한 변수 
	
	Player(){				//추상클래스도 생성자가 있어야한다.
		pause = false;
		currentPos = 0;
	}
	//**지정된 위치(pos)에서 재생을 시작한느 기능이 수행하도록 작성.
	abstract void play(int pos);//추상메서드 
	//**재생을 즉시 멈추는 기능을 수행하도록 작성되어야 한다.
	abstract void stop(); //추상메서드 
	void play() {
		play(currentPos);  //추상메서드를 사용할 수 있다.
	}
}

class AudioPlayer extends Player{  	//추상클래스에 있는 메서드들 전부 구현해야함.
	void play(int pos) {
		System.out.println(pos + "위치부터 play합니다.");
	}
	void stop() {
		System.out.println("재생을 멈춥니다.");
	}
}


public class AbstractExam {

	public static void main(String[] args) {
		
//		Player p = new Player(); //추상클래스는 객체생성 불가
//		AudioPlayer ap = new AudioPlayer();
		Player ap = new AudioPlayer(); //다향
		ap.play(100);
		ap.stop();
		

	}

}
