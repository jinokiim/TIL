package javaAssignment;


public class ProductTest {

	public static void main(String[] args) {
		//객체 생성
		Product pd1 = new Product("001", "노트북", 1200000, 2021, "삼성");
		Product pd2 = new Product("002", "모니터", 300000, 2021, "LG");
		Product pd3 = new Product("003", "마우스", 30000, 2020, "로지텍");
		//출력
		System.out.println("상품번호\t상품명\t가격\t연도\t제조사");
		System.out.println("-----------------------------------------------");
		System.out.println(pd1.toString());
		System.out.println(pd2.toString());
		System.out.println(pd3.toString());

	}

}
