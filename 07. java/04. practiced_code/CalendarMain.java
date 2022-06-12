package mc.ys.lesson2;

import java.util.Scanner;

public class CalendarMain {

	public static void main(String[] args) {
		
		CalendarMain cm = new CalendarMain();
		cm.start();
	
	}
	
	public void start() {
		
		
		Scanner scan = new Scanner(System.in);
		boolean flag = false;
		while(!flag) {
			System.out.print("input month please >>> ");
			int cmd = scan.nextInt();
			
			makeCalendar(cmd);
			
			System.out.printf("input month is %d %n", cmd);
			
			System.out.print("be contunue? [Yes:1, No:0] >>> ");
			cmd = scan.nextInt();
			
			if(cmd==0) {
				System.out.println("Calendar Service is Stopped.");
				flag = true;
				break;
			}else if(cmd!=1 || cmd!=0){
				System.out.println("Wrong inpput. Service is Stopped.");
				flag = true;
				break;
			}
		}
		
		scan.close();

	}

	
	void makeCalendar(int mon) {
		int year = 2021;
		int month = mon;
		int[] spaces = new int[12];
		int[] finalDays = {31,28,31,30,31,30,31,31,30,31,30,31};
		spaces[0] = (2+31)%7;
		for(int i=1; i<12;i++) {
			spaces[i] = (spaces[i-1]+finalDays[i-1])%7;
		}
		int space = spaces[month-1];
		
		
		if(year%400==0 || (year%4==0 && year%100!=0)) {
			finalDays[1] = 29;
		}
		int finalDay = finalDays[month-1];
		
		System.out.printf("%d년 %d월 %n", year, month);
		System.out.println("일\t월\t화\t수\t목\t금\t토");
		for(int i=0;i<space;i++) {
			System.out.print("\t");
		}
		int day = 1;
		
		for(int i=0; i<finalDay; i++) {
			System.out.print(day+"\t");
			if((space+day)%7==0) {
				System.out.println();
			}
			day+=1;
		}
		System.out.println("\n");
	}
}
