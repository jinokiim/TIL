import React, { useState } from 'react';
import './App.css';

function App() {

  let [title, changeTitle] = useState(['남자 코트 추천', '여자 코트 추천', '스니커즈 추천'])
  let posts = '수원 갈비 맛집'
  let [like, changeLike] = useState(0)

  let [modal, modalChange] = useState(false);

  let [buttonTitle, changeButtonTitle] = useState(-1);

  let [inputVal, changeInputVal] = useState('')

  function changeListTitle() {
    var newTitle = [...title];
    newTitle[0] = '남자 신상 코트 추천';
    changeTitle(newTitle);
  }

  // 반복문 작성
  var array1 = [2, 3, 4];
  var newArray = array1.map(function(a){
    return a * 2;
  });

  // for 반복문 작성
  function repeatedUI(){
    var array = [];
    for (var i = 0; i < 3; i++) {
      array.push(<div>안녕</div>);
    }
    return array;
  }
  


  return (
    <div className="App">
      <div className="black-nav">
        <div>Blog Sample</div>
      </div>
      <button onClick={ changeListTitle }>글제목 변경 버튼</button>

      <div className="list">
        <h4>{ title[0] } <span onClick={()=>{changeLike(like+1)}}>👍</span> {like} </h4>
        <p>3월 16일</p>
        <hr/>
      </div>

      <div className="list">
        <h4 onClick={ ()=>{modalChange(!modal)} }>{ title[1] }</h4>
        <p>3월 17일</p>
        <hr/>
      </div>

      <button onClick={()=>{modalChange(!modal)}}>열고닫는버튼</button>
      {
        modal === true
        // 컴포넌트 첫 시작은 대문자로 짓자
        // 1. props로 자식에게 state전달
         // 작명 = {전송할 state}
        ? <Modal title={title} buttonTitle={buttonTitle}></Modal> 
        : null  // 텅빈 HTML
      }
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>3월 18일</p>
        <hr/>
      </div>

{/* map함수 이용 */}
      {
        title.map( (title, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={ ()=>{changeButtonTitle(i)} } >{ title }
                <span onClick={ ()=>{ changeLike(like+1) } }>👍</span>{like}
              </h4>
              <p>3월 18일</p>
              <hr/>
            </div>
          )
        })
      }

      <button onClick={ ()=>{changeButtonTitle(0)} }>버튼1</button>
      <button onClick={ ()=>{changeButtonTitle(1)} }>버튼2</button>
      <button onClick={ ()=>{changeButtonTitle(2)} }>버튼3</button>
      

      {repeatedUI()}

      {/* 리액트에선 onInput과 동일 */}
      {/* 입력할떄마다 console에 hello출력 */}
      {/* <input onChange={ ()=>{ console.log('hello') } }></input> */}
                          {/* 이벤트 동작한 곳 .value */}
      {/* <input onChange={ (e)=>{ changeInputVal(e.target.value) } }></input>
      {inputVal} */}


{/* 
    imput내용을 받아서
    arrayCopy에 추가. 
    (이때 기존의 title배열에 바로추가하지 않고 복사하여 추가(state는 웬만하면 변경 x))
    실제로는 서버로 먼저 보내서 영구저장한다.
 */}
      <div className="publish">
        <input onChange={ (e)=>{ changeInputVal(e.target.value) } }></input>
        <button onClick={ ()=>{
          // unshift() : 맨앞에 자료추가
          var arrayCopy = [...title]
          arrayCopy.unshift(inputVal);
          changeTitle( arrayCopy );
        } }>저장</button>
      </div>

    </div>
    
    

  );
}

{/* 컴포넌트 첫 시작은 대문자로 짓자 */}
//2. 자식컴포넌트에서 props파라미터 입력 후 사용
function Modal(props, i){
  return(
    <div className="modal" key={i}>
          {/* props.을 붙여서 사용 */}
      <h2>제목: {props.title[props.buttonTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
