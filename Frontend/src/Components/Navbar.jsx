import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const Navbarcustom = () => {
  return (
    <>
      <div>
        <Navbar color="dark" expand="md" dark>
          <NavbarBrand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              AEC-Coding Club
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="/newevent">
                  <Button className="mx-2 bg-info">Register New Event</Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/newuser">
                  <Button className="bg-danger">Register New User</Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Navbarcustom;
