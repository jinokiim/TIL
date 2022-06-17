import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


let alertState = true;

function reducer2(state = alertState, action) {
  
  if(action.type === 'alert닫기'){
    return false;
  } else{
    return state;
  }
  
}

let normalState = [
  { id:0, name : 'fancyshoes', quan : 2 }, 
  { id:1, name : 'fancyshoes2', quan : 5  }
]

// redux에선 수정하는 방법을 미리 정의
function reducer(state = normalState, action){

  if(action.type === '항목추가'){
    let copy = [...state];
    copy.push(action.payload);
    console.log(copy)
    return copy

  } else if(action.type === '수량증가'){
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if(action.type === '수량감소'){
    let copy = [...state];
    if(copy[0].quan === 0){
      return copy;
    }
    copy[0].quan--;
    return copy;
  } else {
    return state;
  }
}


let store = createStore(combineReducers({reducer, reducer2}));


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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
