package javaAssignment;

public class Book {
	int bookYear, bookPrice;
	String bookNo, bookTitle, bookAuthor, bookPublisher;
	//객체 생성을 위한.
	Book(String bookNo, String bookTitle, String bookAuthor, int bookPrice, int bookYear, String bookPublisher){
		this.bookNo = bookNo;
		this.bookTitle = bookTitle;
		this.bookAuthor = bookAuthor;
		this.bookPrice = bookPrice;
		this.bookYear = bookYear;
		this.bookPublisher = bookPublisher;
	}
	
	@Override  //toString오버라이딩.
	public String toString(){
		return String.format("%s\t%s\t%s\t%d\t%d\t%s", bookNo, bookTitle, bookAuthor, bookPrice, bookYear, bookPublisher);
	}
}