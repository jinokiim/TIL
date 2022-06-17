import Recact from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';
import './Detail.scss';


function Cart(props){
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        
          {
            props.state.map((a, i)=>{
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>  
                  <td>                                                      
                    <button onClick={()=>{props.dispatch({ type : '수량증가' })}}>+</button>
                    <button onClick={()=>{props.dispatch({ type : '수량감소' })}}>-</button>
                  </td>
                </tr>
              )
            })
          }
        
      </Table>

      { props.alertState === true
        ? <div className="my-alert2">
            <p>지금 구매하면 신규할인 20%</p>
            <button onClick={()=>{props.dispatch({type : 'alert닫기'})}}>닫기</button>
          </div>  
        : null
      }
      

    </div>
  )
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
export default connect(shoeData)(Cart)
// export default Cart;