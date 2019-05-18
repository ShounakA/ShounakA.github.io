import React from 'react';
import {Navbar, Nav, Form}from 'react-bootstrap';
class MyNavbar extends React.Component {
  render() {
    return(
      <Navbar bg="secondary" variant="dark" sticky="top">
      <div className="mr-auto" >&nbsp;</div>
      <Nav variant="tabs" className="mr-auto">
        <Nav.Item bg="primary">
          <Nav.Link  href="">Shounak</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <Form>

      </Form>
    </Navbar>
    );
  }
}
export default MyNavbar;