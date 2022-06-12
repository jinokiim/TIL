package standard.java;

import java.util.ArrayList;

public class GenericTest {

	public static void main(String[] args) {
		
		ArrayList <Integer>list = new ArrayList<Integer>();
		list.add(10); //list.add(new Integer(10));
		list.add(20);
		list.add(30); //String추가했을땐
//		Integer i = (Integer)list.get(2); //컴파일은 되지만 실행시 형변환error
		Integer i = list.get(2); //형변환 생략 가능
		
		System.out.println(list);

	}

}
