import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,Button,Card,Form } from 'react-bootstrap';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch"
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark sticky-top p-0" expand="lg" >
      <Container >
        <h1><span>C</span>ODING</h1>  
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="ms-auto my-2 my-lg-0  "
            style={{ maxHeight: '200px' }}
            navbarScroll>
              <links className='text-white d-flex' >
              <li> <a href='#1'>Home</a></li>
              <li> <a href='#2'>Services</a></li>
              <li> <a href='#'>About Us</a></li>
              <li> <a href='#3'>User</a></li>
              <li> <a href='#'>Search <FaSearch/></a></li>
              </links>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <div id='1' className='container2 '>      
      <h2> Programs For You </h2>
      <h4> Choose what you want  && Join Us. </h4>
      </div>

      <div id='2' className='container3  row'>
      <Card style={{ width: '18rem' }} className='cards ' >
      <Card.Img variant="top" src={html} className=" w-75" />
      <Card.Body>
        <Card.Title>HTML</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check Course</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='cards ' >
      <Card.Img variant="top" src={css} className=" w-75" />
      <Card.Body>
        <Card.Title>CSS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check Course</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='cards ' >
      <Card.Img variant="top" src={js} className=" w-75" />
      <Card.Body>
        <Card.Title>JavaScript</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check Course</Button>
      </Card.Body>
    </Card>
      </div>

      <div id='3' className='container4'>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      </div>

    </div>
  );
}

export default App;
