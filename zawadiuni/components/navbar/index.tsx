"use client"
import { Col, Dropdown, DropdownItem, DropdownMenu, Nav, NavItem, NavLink, Row } from "reactstrap";
import "./navbar.scss";

const NavBar = () => {
  return (
    <Row className="mb-3 mt-3">
      <Col md={{
        size: 10
      }} sm={{
        size: 12
      }} lg={{
        size: 12
      }}>
        <Nav className="justify-content-right topbar static-top shadow">
          <NavItem>
            <NavLink
              active
              href="/departments"
            >
              Departments
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/courses">
              Courses
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/examinations"
            >
              Examinations
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
};

export default NavBar;