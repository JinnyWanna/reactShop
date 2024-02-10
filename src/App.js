import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import bg from './img/bg.png'
import data from './data.js';

function App() {
  let [shoes, setShoes] = useState(data); 
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className ="main-bg" style = {{ backgroundImage : `url(${bg})`}}>
      </div>

      <Row className="pic-row">
        <Col sm className="pic-column">
          <img className = "shoes-img" src = "https://codingapple1.github.io/shop/shoes1.jpg"/>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].price}</p>
        </Col>
        <Col className="pic-column">
          <img className = "shoes-img" src = "https://codingapple1.github.io/shop/shoes2.jpg"/>
          <h4>{shoes[1].title}</h4>
          <p>{shoes[1].price}</p>
        </Col>
        <Col sm className="pic-column">   
          <img className = "shoes-img" src = "https://codingapple1.github.io/shop/shoes3.jpg"/>
          <h4>{shoes[2].title}</h4>
          <p>{shoes[2].price}</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
