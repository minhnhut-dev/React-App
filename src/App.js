import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar,Form,NavDropdown,Nav} from 'react-bootstrap';
import Header from './Header';
import Banner from './Banner';
function App() {
  return (

  //   <Navbar bg="light" expand="lg">
  //   <Navbar.Brand>
  //     <a href="https://kmin.edu.vn/">
  //        <img src={logo} alt="logo"></img>
  //     </a>
  //   </Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav className="mr-auto">
  //       <Nav.Link href="#home">Trang Chủ</Nav.Link>
  //       <Nav.Link href="#link">Link</Nav.Link>
  //       <NavDropdown title="Dropdown" id="basic-nav-dropdown" variant="secondary" >
  //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //         <NavDropdown.Divider />
  //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  //       </NavDropdown>
  //     </Nav>
  //     <Form inline>
  //       <Button variant="outline-success">Đăng Ký</Button>
  //       <Button variant="outline-warning">Đăng nhập</Button>
  //     </Form>
  //   </Navbar.Collapse>
  // </Navbar>
  <div>
    <div className="Header">
          <Header/>
    </div> 
          {/* <Banner/> */}
  </div>    
  );
}

export default App;
