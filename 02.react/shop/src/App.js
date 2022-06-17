import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';

import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';

import { Link, Route, Switch } from 'react-router-dom';

// context만들기 
// 1. React.createContext(); 로 범위 생성
// 2. 같은 값을 공유할 HTML을 범위로 싸매기
// 3. useContext(범위이름)로 공유된 값 사용하기
export let stockContext = React.createContext();

function App() {

  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
              <Nav.Link as={Link} to="/cart/">Cart</Nav.Link>
              
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>
        <Route exact path="/">
          <div className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple example.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>

          <div className="container">

            <stockContext.Provider value={stock}>

            <div className="row">
              {
                shoes.map( (a, i)=>{
                  return <Card shoes={shoes[i]} i={i}></Card>
                })
              }
            </div>

            </stockContext.Provider>

            <button className="btn btn-primary" onClick={()=>{
              // 서버로 데이터 보내고싶을때
              // axios.post('서버url', {id : 'jino', pw : 1234})

              // 서버Url에 get요청
              axios.get('https://codingapple1.github.io/shop/data2.json')
              // 성공하면
              .then((result)=>{
                setShoes([...shoes, ...result.data]);
              })
              // 실패하면
              .catch(()=>{
                console.log('실패')
              })

            }}>더보기</button>

          </div>
        </Route>
        
        
        <Route path="/detail/:id">
          <stockContext.Provider value={stock}>
            <Detail shoes={shoes} stock={stock} setStock={setStock}></Detail>
          </stockContext.Provider>
        </Route>
        

        <Route path="/cart">
          <Cart></Cart>
        </Route>


        
    {/* 모든 경로에서 보인다. 지금은 Switch 컴포넌트 안에있어서 Router들이 하나만보인다. */}
        {/* <Route path="/:id">
          <div>아무거나 적었을때 이것이 보인다.</div>
        </Route> */}

      </Switch>

      

    </div>

    
  );
}

function Card(props){
  
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
      {/* <Test></Test> */}
    </div>
    
  )
}


// function Test(){
//   let stock = useContext(stockContext);
//   return <p>재고 : {stock}</p>
// }

export default App;
