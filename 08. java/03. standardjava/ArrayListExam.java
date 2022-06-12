package standard.java;
import java.util.*;

public class ArrayListExam {

	public static void main(String[] args) {
		
		//기본길이(용량, capacity)가 10인 ArrayList를 생성
		ArrayList list1 = new ArrayList(10);
		//ArrayList에는 객체만 저장 가능
		//autoboxing에 의해 기본형이 참조형으로 자동 변환
//		list1.add(new Integer(5)); 와 같다.
		list1.add(5);
		list1.add(4);
		list1.add(2);
		list1.add(0);
		list1.add(1);
		list1.add(3);
		System.out.println("----------1------------");
		ArrayList list2 = new ArrayList(list1.subList(1,4));
		print(list1, list2);
		
		System.out.println("----------2------------");
		//Collection은 인터페이스, Collections는 유틸클래스
		Collections.sort(list1);  //list1과 list2를 정렬한다.
		Collections.sort(list2);  //Collections.sort(List 1)
		print(list1, list2);
		
		System.out.println("----------3------------"); 
		System.out.println("list1.containsAll(list2): " + list1.containsAll(list2)); //list2의 모든 요소를 포함하고있는지.
		
		
		System.out.println("----------4------------");
		list2.add("B");
		list2.add("C");
		list2.add(3, "A");
		print(list1, list2);
		
		System.out.println("-----------5-----------");
		list2.set(3, "AA");
		print(list1, list2);
		
		System.out.println("-----------6-----------"); 
		//list1에서 list2와 곂치는 부분만 남기고 나머지는 삭제한다.
		System.out.println("list1.retainAll(list2): " + list1.retainAll(list2));
		System.out.println("list1: "+list1);
		System.out.println("list2: "+list2);
		
		System.out.println("-----------7-----------"); 
		 //list2에서 list1에 포함된 객체들을 삭제한다.
		 for(int i = list2.size()-1; i>= 0; i--) {
			 if(list1.contains(list2.get(i)))
				 list2.remove(i);
		 }
		 print(list1, list2);
		 
	
	}//main의 끝 

	static void print(ArrayList list1, ArrayList list2) {
		System.out.println("list1:"+list1);
		System.out.println("list1:"+list2);
	}//class
}
