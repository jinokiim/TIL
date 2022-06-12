package standard.java;

import java.util.HashMap;

public class HashMapExam {

	public static void main(String[] args) {
		
		HashMap<String, Student2> map = new HashMap<>();
		map.put("자바왕", new Student2("자바왕", 1, 1, 100, 100, 100));
		
		Student2 s = map.get("자바왕");
		
		System.out.println(map);
		
		System.out.println(s.name);

	}

}

class Student2{
	String name = "";
	int ban;
	int no;
	int kor;
	int eng;
	int math;
	
	Student2(String name, int ban, int no, int kor, int eng, int math){
		this.name = name;
		this.ban = ban;
		this.no = no;
		this.kor = kor;
		this.eng = eng;
		this.math = math;
	}
}