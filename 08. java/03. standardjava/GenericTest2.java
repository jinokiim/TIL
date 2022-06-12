package standard.java;

import java.util.ArrayList;

class Tv1{}
class Audio1 {}


public class GenericTest2 {

	public static void main(String[] args) {
		
		ArrayList<Tv1> list = new ArrayList<Tv1>();
		list.add(new Tv1());
		
//		Tv1 tv = (Tv1)list.get(0); //형변환 불필요
		Tv1 tv = list.get(0);

	}

}
