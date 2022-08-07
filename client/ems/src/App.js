
import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
import HireEmployee from './Components/HireEmployee';
import ManageEmployee from './Components/ManageEmployee';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      
      <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Employee Managment System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/hireemploye">Hire Employee</Nav.Link>  
           <Nav.Link as={Link} to="/manageemploye">Manage Employee</Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
      <Routes>
   <Route path="/hireemploye" element={<HireEmployee/>} />
   <Route path="/manageemploye" element={<ManageEmployee/>} /> 
   </Routes>
      
  
    
  
           
      
    </Router>
  );
}

export default App;
