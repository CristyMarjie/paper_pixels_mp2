import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HowToOrder from '../Modal/HowToOrder';
import Footer from '../Footer/Footer';
// import UserLogin from '../Modal/UserLogin';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/main" className="text-secondary">
            <img width="40px" src={`/ppix-logo.png`} alt="FAQ" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/main">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/faqs">
                FAQs
              </Nav.Link>
              <Nav.Link as={Link} to="/allproducts">
                All Products
              </Nav.Link>
              {/* <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tote Bag</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {' '}
                  T-shirt{' '}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Brochure</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="#">
                <HowToOrder />
              </Nav.Link>
            </Nav>
            {/* <Navbar.Text>
              <a href="#" className="text-secondary text-decoration-none">
                <UserLogin />
              </a>{' '}
              |{' '}
              <a
                href="#register"
                className="text-secondary text-decoration-none"
              >
                Register
              </a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <Footer />
    </>
  );
}

export default Home;
