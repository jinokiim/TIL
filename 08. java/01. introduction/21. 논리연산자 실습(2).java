//https://programmers.co.kr/learn/courses/5/lessons/901

public class LogicalOperatorExam {
    public boolean isAgeTwenties(int age) {
        boolean isTwenties = false;
        //아래 빈칸을 채워 코드를 완성하세요.
        if( 
age >= 20 && age < 30
 ) {
            isTwenties = true;
        }
        else {
            isTwenties = false;
        }    
        return isTwenties;
    }

    public static void main(String[] args) {
        LogicalOperatorExam exam = new LogicalOperatorExam();
        exam.isAgeTwenties(19);
        exam.isAgeTwenties(25);
    }
}
