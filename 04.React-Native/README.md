# rn-learning

## installation

 - https://reactnative.dev/docs/environment-setup 참조

### Environment Setup
 - Development OS : macOS
 - Target OS : Android 

### Installing dependencies

#### Node & Watchman

```console
brew install node
brew install watchman
```

#### Java Development Kit

```console
brew tap homebrew/cask-versions
brew install --cask zulu11
```

#### Android development environment

##### 1. Install Android Studio

https://developer.android.com/studio
 - Android SDK
 - Android SDK Platform
 - Android Virtual Device
 설치후 패키지 다운로드.

##### 2. Install the Android SDK
 - Android SDK Platform 30
 - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
 설치후 패키지 다운로드
 
##### 3. Configure the ANDROID_SDK_ROOT environment variable

```console
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

#### 뼈대 설치 (제대로 설치 되었는지 확인)

원하는 경로에서
```console
npx react-native init AwesomeProject
```

#### 프로젝트 실행
```console
npx react-native run-android
```


<img width="410" alt="Screen Shot 2022-05-05 at 8 15 54 PM" src="https://user-images.githubusercontent.com/88222461/166912470-1c12e455-5062-4f41-8711-a970f4c65119.png">


## 현재 프로젝트 만드는 방법
### 프로젝트 폴더 만들기
```console
npx create-react-native-app
```

### 1번콘솔에서 metro 실행
```console
react-native start
```

### 2번콘솔에서 react-native 실행
```console
react-native run-android
```

## 라이브러리 설치 관련

#### expo-app-loading
```console
expo install expo-app-loading
```

#### 폰트사용
```console
expo install expo-font
```
#### 이미지 등 asset 관련
```console
expo install expo-asset
```
#### navigation
```console
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
```
Edit `MainActivity.java` file which is located in `android/app/src/main/java/<your package name>/MainActivity.java.`
Add the following code to the body of MainActivity class:
and make sure to add an import statement at the top of this file:
```java
import android.os.Bundle;

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```
create-react-native-app으로 프로젝트를 생성해서 별도로 추가안해도된다.


#### @react-navigation/bottom-tabs 설치

```console
npm install @react-navigation/bottom-tabs
```

#### @react-navigation/native-stack 설치

```console
npm install @react-navigation/native-stack
```

#### styled-components 설치
```console
npm install styled-components
```
```javascript
import styled from "styled-components/native"
```

#### typescript를 사용할수 있도록
```console
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```
이후 `tsconfig.json` 파일 생성
```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

#### react-native-web-swiper 설치
```console
npm i react-native-web-swiper --save
```

#### expo-blur 설치
```console
expo install expo-blur
```

#### typescript styled-components 적용하기
```console
npm install --save @types/styled-components
```

#### react-query 설치
```console
npm install react-query
```
