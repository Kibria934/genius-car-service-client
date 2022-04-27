import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <div>
        <Spinner
          animation="border"
          className="display-flex justify-content-center"
          role="status"
        >
          <span className=" text-center visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height={30} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#service">Services</Nav.Link>
              <Nav.Link href="home#expert">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {user && (
                <>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage">
                    Manage
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addservice">
                    Add
                  </Nav.Link>
                  <Nav.Link as={Link} to="/orders">
                    Orders
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={handleLogout}
                >
                  logout
                  <span className="ms-3 text-info">{user?.displayName}</span>
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              )
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
