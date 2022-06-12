package pkg2;

import pkg1.MyParent;

class MyChild extends MyParent{
	public void printMembers() {
//		System.out.println(p.prv); //에러
//		System.out.println(dft); //에러 
		System.out.println(prt); //ok
		System.out.println(pub); //ok
	}
	
}
public class MyParrentTest2 {

	public static void main(String[] args) {
		
		MyParent p = new MyParent();
//		System.out.println(p.prv); //에러
//		System.out.println(p.dft); //에러 
//		System.out.println(p.prt); //에러 
		System.out.println(p.pub); //ok

	}

}
