# java-learning

## Contents

[01. introduction](https://github.com/jinokiim/java-learning/tree/main/01.%20introduction) : [프로그래머스](https://programmers.co.kr/learn/courses/5)를 보고 java 정리 

[02. javaPassion](https://github.com/jinokiim/java-learning/tree/main/02.%20javaPassion) : 윤성우의 열혈JAVA 강의듣고 정리한 내용.

[03. standardjava](https://www.youtube.com/channel/UC1IsspG2U_SYK8tZoRsyvfg) : java의 정석 유투브 강의 듣고 정리한 내용

[04. practice_code](https://github.com/jinokiim/java-learning/tree/main/03.%20practice_code) : 연습한 code 올리는 곳.

---
## Basic
### 자바 언어 탐색

#### 미국 Sun Microsystems사 에서 개발한 객체지향 프로그래밍 언어

* 1995년 5월, Sun World에서 공식발표
* 1996년 1월, JDK 1.0 발표 
* 현재는 오라클에 인수가 된 상태



#### 객체지향 언어(Object Oriented Language)

* 60년 말 Simula 언어에서 발전



#### C++ 문법을 기본으로 개발

* Java 이전에 객체지향 언어로 가장 범용적인 언어
* 1983년 경, AT&T 연구소의 Bjarne Stroustrup이 개발
* C언어에 객체지향 특성 확장



### 자바 언어 특징

* 타 언어에 비해 배우기 쉽다.
  * C와 C++언어의 문법을 기본으로 차용하여 개발된 언어
  * C와 C++언어가 가진 어려운 문법인 포인터와 다중 상속 제거
  * C와 C++언어에 비해 쉬운 언어이다.
* 플랫폼에 독립적이다.
  * 자바는 JVM()만 있으면 윈도우, 리눅스, 맥 등 어떤 플랫폼에서도 실행이 가능
  * JVM - 자바로 만들어진 프로그램을 실행시켜주는 프로그램
* 객체지향 프로그래밍이다.
* Garbage Collector로 사용되지 않는 메모리를 자동적으로 정리해준다.


<img width="915" alt="Screen Shot 2021-12-27 at 9 46 53 PM" src="https://user-images.githubusercontent.com/88222461/147473082-80f052a5-12d9-4bd3-a6c3-e0e654d5a20b.png">


---

### 자바 개발황경 구축

* 자바 설치 및 환경 설정에 실패하면 [Online Java Compiler](https://www.jdoodle.com/online-java-compiler) 등 클라우드 서비스에서 사용 가능

#### Windows

* JDK 다운 로드 및 설치
  * http://www.oracle.com/technetwork/java/index.html -> Java SE링크 클릭 -> JDK다운로드 링크 클릭 ->라이센스를 동의 한 후 운영체제에 맞는 JDK를 다운로드 (32비트 윈도우 운영체제-Windows x86을, 64비트 윈도우 운영체제- Windows x64)
  * 다운로드 후 설치

- 환경변수 설정(윈도우 버전별 환경변수 메뉴 여는 방법)
  - JAVA_HOME
  - Path
  - CLASSPATH
- 이클립스 다운 로드 및 설치
  - [http://www.eclipse.org](http://www.eclipse.org/) 에서 운영체제에 맞는 버전을 다운로드 

#### OSX
##### JDK Download

* [JDK Download](https://www.oracle.com/java/technologies/downloads/#jdk17-mac) : Java SE Development Kit **17.0.1** [downloads](https://www.oracle.com/java/technologies/downloads/#jdk17-mac)
* m1 mac os 기준으로 실습 실행.
<img width="667" alt="Screen Shot 2021-12-10 at 7 16 54 PM" src="https://user-images.githubusercontent.com/88222461/145557746-daaff813-0695-4350-b720-91db899ae0d0.png">

##### Java 설치 확인
```console
$ java -version
```
<img width="665" alt="Screen Shot 2021-12-10 at 7 18 21 PM" src="https://user-images.githubusercontent.com/88222461/145557923-e55ce28e-95ae-4c4c-959f-5e1311a2f03c.png">

```console
$ javac -version
```
<img width="482" alt="Screen Shot 2021-12-10 at 7 18 31 PM" src="https://user-images.githubusercontent.com/88222461/145557945-6736e68d-b180-445a-a3d7-4fb1f5f5c262.png">



#### 

---
### ECLIPSE Download
* [ECLIPSE Download](https://www.oracle.com/java/technologies/downloads/#jdk17-mac) : Java SE Development Kit **17.0.1** [downloads](https://www.oracle.com/java/technologies/downloads/#jdk17-mac)
* m1 mac os 기준으로 실습 실행.

#### ECLIPSE 실행화면

<img width="616" alt="Screen Shot 2021-12-10 at 7 18 59 PM" src="https://user-images.githubusercontent.com/88222461/145558005-cf1d1ab3-cef3-4167-8531-60ab0798b62e.png">


---

##### 2019년 06월 18일 안내사항

모종의 이유로 자바 설치 및 환경 설정에 실패하시는 분께서는 [Online Java Compiler](https://www.jdoodle.com/online-java-compiler) 등 클라우드 서비스를 이용해보세요.

------

### 자바 개발순서

1. 소스 작성
2. 작성한 소스 컴파일
3. 컴파일한 소스를 JVM을 이용하여 실행

#### 따라해 보기

- 소스 작성
  - `HelloWorld.java` 파일을 디렉토리에서 작성

```java
public class HelloWorld{
    public static void main(String args[]){
        System.out.println("Hello World");
    }
}
```

- 컴파일
  - 터미널 실행 ( 윈도우 버튼 -> 실행 -> cmd를 입력한 후 엔터를 입력)
  - cd 해당 디렉토리로 이동
  - **`javac HelloWorld.java` 로 컴파일 합니다.**
- 실행
  - `java HelloWorld` 로 실행
  - 화면에 HelloWorld가 출력되는 것을 확인

#### 이클립스를 이용하여 똑같이 실행해 보기

- eclipse 실행
- 사용자 홈디렉토리 아래에 workspace 폴더를 지정
- first 프로젝트 생성
- 소스 작성
  - `src폴더`에서 `HelloWorld.java`파일 생성
  - 앞에서 만들었던 파일과 똑같은 파일을 `HelloWorld.java`파일로 작성
  - 워크스페이스 경로를 파일탐색기로 열어보면 src폴더에 HelloWorld.java파일 확인 가능
- 컴파일
  - bin폴더를 열어보면 `HelloWorld.class`파일 생성되어있음 (이클립스는 소스파일에 문제가 없다면 자동으로 컴파일하여 bin폴더에 클래스를 만들게 됩니다.)
- 실행
  - 클래스를 선택한 후 우측버튼을 클릭하고 자바 어플리케이션을 실행하는 메뉴를 선택

