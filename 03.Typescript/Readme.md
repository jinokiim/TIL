# Typescript

## Typescript 설치

### 일반 HTML CSS JS웹 개발시 사용하려면

1. nodejs 설치

2. VScode

3. 터미널에서

```bash
$ npm install -g typescript
```

### React 프로젝트에서 사용할경우

1. 이미 있는 react 프로젝트에 설치

- 작업경로에서 터미널 오픈

```bash
$ npm install --save typescript @ types/node @types/react @types/react-dom @types/jest
```

2. react 프로젝트 새로만들때

- 터미널 오픈

```bash
$ npx create-react-app my-app --template typescript
```

### Vue 프로젝트에서 사용할경우

1. 터미널 오픈

```bash
$ vue add typescript
```

2. 내용 추가

```html
<script lang="ts"></script>
```

### ts 사용

- js로 변환하도록

```bash
$ tsc -w
```
