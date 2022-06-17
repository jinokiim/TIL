import {React, useState} from 'react';

import { Navbar, Container, Nav, NavDropdown, Button  } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import shoes1 from './img/shoes1.jpeg'
import shoes2 from './img/shoes2.jpeg'
import shoes3 from './img/shoes3.jpeg'
import Data from './data'
import Detail from './Detail';




function App() {

  
  let [shoes, shoesChange] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
              <Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link>
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
                  
        {/* exact path는 주소가 정확해야만 보여준다. */}
      <Route exact path="/">
        
        {/* 사진배경 */}
        <div className="background">
          <h1>20% Season Off</h1>
          <p>
            This is a simple example
          </p>

          <p>
            <Button variant="primary">Primary</Button>{' '}
          </p>
        </div>
        <div className="container">
          <div className="row">
            {/* map(반복문 사용) */}
            {
              shoes.map((data, i) => {
                return <Card shoes={data} i={i} key={i}></Card>
                
              })
            }
            
          </div>
        </div>
      </Route>

      <Route path="/detail">
        <Detail></Detail>
      </Route>

      
    </div>
  );
}



// 컴포넌트 만들기
function Card(props, i){
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg" }alt="shoes1"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}


export default App;
