# react-learning



## Contents

[]() : []()내용

---
##### node.js 다운로드



[다운로드 홈페이지](https://nodejs.org/en/) 16.14.0 다운로드
<img width="870" alt="Screen Shot 2022-02-16 at 9 41 35 AM" src="https://user-images.githubusercontent.com/88222461/154174244-1f263fcf-235d-41d9-9f51-a15fc6233cab.png">

버전 확인
```console
$ node --version
```


* m1 mac os 기준으로 실습 실행.

### npm 버전 확인
```console
$ npm --version
```

------

#### react 설치

터미널창 실행후
```console
$ npm install create-react-app
```

* error 발생하면 관리자 권한으로 실행
```console
$ sudo npm install create-react-app
```
* 패스워드 입력


설치 확인.
```console
$ npx create-react-app --version
```

원하는 폴더에 프로텍트 템플릿 설치.
```console
$ npx create-react-app ProjectName
```
부트스트랩이 필요할경우
```console
$ npm install bootstrap@4
```

#### node_modules 설치
원하는 프로젝트 폴더 터미널 실행창에서
```console
$ npm install
```
<img width="276" alt="Screen Shot 2022-02-16 at 9 50 43 AM" src="https://user-images.githubusercontent.com/88222461/154175116-faa73979-9db4-44b4-831f-36085509f1d5.png">

#### 실행

```console
$ npm start
```
<img width="593" alt="Screen Shot 2022-02-16 at 10 03 37 AM" src="https://user-images.githubusercontent.com/88222461/154176378-ebc3a3bd-1759-409d-95ca-48cb65948cc8.png">


### 빌드작업
```console
$ npm run build
```
```console
$ npm install -g serve
```
```console
$ serve -s build
```
* 이후 라이브서버 주소를 크롬창에 복사


## 다시 gitclone 재실행 시

```console
$ npm install
```

```console
$ npm start
```
## 하면 실행 된다.


## React-router-dom 셋팅

```console
$ npm install react-router-dom@5.2.0 
```
또는 yarn이 설치되어있다면
```console
$ yarn add react-router-dom@5.2.0 
```

이후 index.js에 
```javascript
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
  document.getElementById('root')
);
```
추가.

app.js에 추가
```javascript
import { Link, Route, Switch } from 'react-router-dom';
```
라우팅하려면 1. 원하는 곳에 <Route><Route/>태그를 작성.

          2. <Route>안에 path와 path 방문시 보여줄 HTML 을 적는다. 
  
  
## Redux 설치
```console
$ yarn add redux react-redux
```
 또는 
```console
$ npm install redux react-redux
```
  
이후 index.js에 추가
```javascript
import { createStore } from 'redux';
  
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```
state 초기값 설청해주고  사용
```javascript
let store = createStore(()=>{ return [{ id:0, name : 'fancyshoe', quan : 2 }] });  

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

  
사용할 파일로 이동,
```javascript
  // state를 porps화
function shoeData(state) {
  return {
    
    // state라는 이름의 props로 변경
    state : state

  }
}
// connect(함수명)(컴포넌트명)
export default connect(shoeData)(Cart)
```
  
