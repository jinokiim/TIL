package standard.java;

import javax.sql.rowset.serial.SQLOutputImpl;

public class GuGuDan {

	public static void main(String[] args) {
		
		MyMath mm = new MyMath();
		
		mm.printGuGuDan(13);


	}

}


class MyMath{
	void printGuGuDan(int dan) {
		if (!(2<=dan && dan<=9)) {
			return;
		}
		
		for(int i=1; i<10; i++) {
			System.out.printf("%d X %d = %d%n", dan, i, dan*i);
		}
	}	
}
