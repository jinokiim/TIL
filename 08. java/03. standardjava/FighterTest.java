package standard.java;

abstract class Unit2{
	int x, t;
	abstract void move(int x, int y);
	void stop() {
		System.out.println("stop.");
	}
}

interface Fightable{
	void move(int x, int y);  //public abstract가 생각됨.
	void attack(Fightable f); //public abstract가 생각됨.
}

class Fighter extends Unit2 implements Fightable{
	//오버라이딩 규칙: 조상(public)보다 접근제어자가 범위가 좁으면 안된다.
	public void move(int x, int y) {
		System.out.println("[" + x+","+y+"]로 이동");
	}  
	public void attack(Fightable f) {
		System.out.println(f+"를 공격");
	}
	
	//싸울수 있는 상대를 불러온다.
	Fightable getFightable() {
		Fighter f = new Fighter(); //Fighter를 생성해서 반환
		return f;
	}
	
}


public class FighterTest {

	public static void main(String[] args) {

		Unit2 u = new Fighter();
		Fighter f = new Fighter();
		Fightable fa = new Fighter();
		Fightable f2 = f.getFightable();
		
		u.move(100, 200);
//		u.attack(new Fighter()); //에러
		u.stop();
		
		f.move(100, 200);
		f.attack(new Fighter());
		f.stop();
		
		fa.move(100, 200);
		fa.attack(new Fighter());
//		fa.stop();   //에러

	}

}
