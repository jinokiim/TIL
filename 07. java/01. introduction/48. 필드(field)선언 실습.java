//https://programmers.co.kr/learn/courses/5/lessons/365

public class Song {
    String songTitle;
    String singer;
    String albumName;
    int trackNumber;
    
}

public class SongExam {
    public static void main(String[] args) {
        Song song = new Song();
        song.songTitle = new String("곡명");
        song.singer = new String("가수");
        song.albumName = new String("앨범");
        song.trackNumber = 5;
    }
}
