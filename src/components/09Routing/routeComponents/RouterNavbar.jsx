import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import { RouterUser } from "../RoutingRoot";

const RouterNavbar = () => {
  const user = useContext(RouterUser);
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary d-flex justify-content-between"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Router-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products">
                  Products
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/product-info">
                  Product-Info
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/product-list">
                  Product-List
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/user/78/deva">
                  Cart & Hooks
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <span className="bg-dark text-white px-3 py-2 mx-3 rounded-pill">
          <Link to="/login" className="text-decoration-none text-white">
            {user}
          </Link>
        </span>
      </Navbar>
    </div>
  );
};

export default RouterNavbar;
