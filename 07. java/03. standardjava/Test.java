package standard.java;

import java.util.ArrayList;
  
public class Test {
	public static void main(String[] args) {
  
        // create an empty array list with an initial capacity
        ArrayList arrlist = new ArrayList(5);
  
        // use add() method to add elements in the list
        arrlist.add(15);
        arrlist.add(20);
        arrlist.add(25);
  
        // prints all the elements available in list
        System.out.println("arrlist = " + arrlist);
        
    }
}
