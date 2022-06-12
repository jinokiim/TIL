import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';
import {Button, Nav} from 'react-bootstrap';

import {CSSTransition} from 'react-transition-group';

import {stockContext} from './App'
import { connect } from 'react-redux';

function Detail(props){

  let [alert, setAlert] = useState(true);
  let stock = useContext(stockContext);
  let [tab, setTab] = useState(0);
  let [buttonSwitch, setButtonSwitch] = useState(false);
  // useEffect 훅 : 컴포넌트가 mount되었을때, update될때 특정 코드를 실행할 수 있다.
  // useEffect 여러개 사용하면 순서대로 실행
  useEffect(()=>{
  let timer = setTimeout(()=>{ setAlert(false) }, 2000);
  // 2000ms 후에 실행할 코드


    // retrun(Detail 컴포넌트가 사라질때 실행)
    // return function code(){}   
    // return ()=>(){} 와 같음  
    // 의도치 않은 error가 발생할 수 있어 clearTimeout() 함수 사용
    return ()=> {clearTimeout(timer)}

  },[alert]);
  // [] 안에 useEffect가 실행될 조건 입력 / 여기선 alert가 변경될때만 실행한다.
  //  빈[] 면 update시엔 적용하지않는다.

  

  let { id } = useParams();
  let history = useHistory();
  let product = props.shoes.find(function(shoes){
    return shoes.id == id;
  });

  return (
    <div className="container">
      <div>
        <p className="red">Detail</p>
      </div>

{/* alert가 true인지 ?? // ?-> 참일때 실행할 코드 / : -> 거짓일때 실행할 코드 */}
      {
        alert === true
        ? (<div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>)
        : null
      }
      


          <div className="row">
            <div className="col-md-6">
              <img src={"https://codingapple1.github.io/shop/shoes"+(product.id+1)+".jpg"} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{product.title}</h4>
              <p>{product.content}</p>
              <p>{product.price}원</p>

              <Info stock={props.stock}></Info>

              <button className="btn btn-danger" onClick={()=>{
                var copyArray = [...props.stock];
                copyArray[0] -= 1;
                props.setStock(copyArray);
                props.dispatch({type : '항목추가', payload : {id:2, name:'새로운상품', quan:1} });
                history.push('/cart')

              }}>주문하기</button> 

              <button className="btn btn-danger" onClick={()=>{
                // history.goBack();
                history.push('/')
              }}>뒤로가기</button> 
            </div>
          </div>

          <Nav className="mt-t" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={()=>{
                setButtonSwitch(false);
                setTab(0);
              }}>0번째 탭</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={()=>{
                setButtonSwitch(false);
                setTab(1)
              }}>1번째 탭</Nav.Link>
            </Nav.Item>  
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={()=>{
                setButtonSwitch(false);
                setTab(2)
              }}>2번째 탭</Nav.Link>
            </Nav.Item>  
          </Nav>

              {/*   스위치(true면 동작)                동작하는 시간*/}
          <CSSTransition in={buttonSwitch} classNames="wow" timeout={500}>
            <TabContent tab={tab} setButtonSwitch={setButtonSwitch}></TabContent>
          </CSSTransition>
          



        </div>
  )
}

function Info(props){
  return (
    <p>재고: {props.stock[0]}</p>
  )
}

// 조건이 3개이상인 조건문만들기
function TabContent(props) {

  useEffect(()=>{
    props.setButtonSwitch(true);
  });

  if(props.tab===0){
    return <div>0번째 내용입니다.</div>
  } else if(props.tab===1){
    return <div>1번째 내용입니다.</div>
  } else if (props.tab===2){
    return <div>2번째 내용입니다.</div>
  }
  
}


// state를 porps화
function shoeData(state) {
  return {
    
    // state라는 이름의 props로 변경
    state : state.reducer,
    alertState : state.reducer2
  }
}
// connect(함수명)(컴포넌트명)
export default connect(shoeData)(Detail)

// export default Detail;