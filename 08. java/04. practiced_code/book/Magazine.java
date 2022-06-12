package javaAssignment;

public class Magazine extends Book{//Book클래스 상속
	int month;
	//객체 생성을 위한.
	Magazine(String bookNo, String bookTitle, String bookAuthor, int bookPrice, int bookYear, String bookPublisher, int month){
		//book 클래스 참조
		super(bookNo, bookTitle, bookAuthor, bookPrice, bookYear, bookPublisher);
		//month
		this.month = month;
	}
	
	@Override  //toString오버라이딩.
	public String toString(){
		return String.format("%s\t%s\t%s\t%d\t%d\t%s\t%d", bookNo, bookTitle, bookAuthor, bookPrice, bookYear, bookPublisher, month);
	}
}