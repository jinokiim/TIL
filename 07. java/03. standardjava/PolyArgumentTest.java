package standard.java;

import java.util.Vector;

class Product{
	int price;
	int bonusPoint;
	
	Product(int price){
		this.price = price;
		bonusPoint = (int)(price/10.0);
	}
}

class Tv extends Product{
	Tv(){
		//조상클래스의 생성자 Product(int price)를 호출한다.
		super(100);
	}
	//Object클래스의 toString()을 오버라이딩 한다.
	public String toString() {
		return "Tv";
	}
}

class Computer extends Product{
	Computer() {
		super(200);
	}
	public String toString() {
		return "Computer";
	}
}

class Audio extends Product{
	Audio(){
		super(50);
	}
	public String toString() {
		return "Audio";
	}
}

class Buyer{
	int money = 1000;
	int bonusPoint = 0;
//	Product[] item = new Product[10]; //구입한 제품을 저장하기 위한 배열
	Vector item = new Vector();  // 구입한 제품을 저장하고 크기가 저절로 늘어남.
	int i = 0;
	
	void buy(Product p){
		if(money<p.price) {
			System.out.println("잔액이 부족합니다.");
			return;
		}
		money -= p.price;
		bonusPoint += p.bonusPoint;
//		item[i++] = p; //제품을 Product[] item에 저장.(리스트일경우.)
		item.add(p);
		System.out.println(p+"을/를 구입했습니다.");
	}
	
	void refund(Product p) {
		if(item.remove(p)) {
			money += p.price;
			bonusPoint -= p.bonusPoint;
			System.out.println(p + "을/를 환불했습니다.");
		}else {
			System.out.println("해당 제품이 없습니다.");
		}
	}
	
	void summary() {
		int sum = 0;
		String itemList = "";
		
//		//반복문을 이용해서 구입한 물품의 총 가격과 목록을 만든다.(리스트일경)
//		for(int i=0; i<item.length; i++) {
//			if(item[i]==null) break;
//			sum += item[i].price;
//			itemList += item[i] + ", ";
//		}
	    for(int i = 0; i<item.size(); i++) {
	    	Product p = (Product)item.get(i); //Vector의 i번째 있는 객체를 얻어온다.
	    	sum += p.price;
	    	itemList += (i==0) ? "" + p :  ", " + p;
	    }
		System.out.println("구입한 물품의 총 금액은 " + sum + "원 입니다.");
		System.out.println("구입한 물품의 목록은 " + itemList + " 입니다.");
	}
}




public class PolyArgumentTest {

	public static void main(String[] args) {
		
		Buyer b = new Buyer();
		Tv tv = new Tv();
		Computer com = new Computer();
		Audio audio = new Audio();
		
		b.buy(tv); //Product p = new Tv();/ b.buy(p); 와 동
		b.buy(com);
		b.buy(audio);
		b.buy(new Computer());
		b.refund(com);
		System.out.println(b.money);
		System.out.println(b.bonusPoint);
		b.summary();

	}

}
