//https://programmers.co.kr/learn/courses/5/lessons/902

public class StringExam {
    public static void main(String[] args) {
        String str1 = new String("Hello world");
        String str2 = new String("Hello world");
        //equals -> 문자열이 같은지 비교
        if( str1.equals(str2) ){
            System.out.println("str1과 str2는 같은 값을 가지고 있습니다.");
        }
        else{
            System.out.println("str1과 str2는 다른 값을 가지고 있습니다.");
        }
    }
}
