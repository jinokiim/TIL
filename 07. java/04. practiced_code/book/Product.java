package javaAssignment;

public class Product {
	int prdPrice, prdYear;   //데이터 타입 용도에 맞게 지정 및 초기화
	String prdNo, prdName, prdMaker;
	//객체 생성을 위한.
	Product(String prdNo, String prdName, int prdPrice, int prdYear, String prdMaker){
		this.prdNo = prdNo;
		this.prdName = prdName;
		this.prdPrice = prdPrice;
		this.prdYear = prdYear;
		this.prdMaker = prdMaker;
	}
	
	@Override  //toString오버라이딩.
	public String toString(){
		return String.format("%s\t\t%s\t%d\t%d\t%s", prdNo, prdName, prdPrice, prdYear, prdMaker);
	}
}