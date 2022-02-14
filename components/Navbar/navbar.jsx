import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Col, Row, Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'


const Header = () => {

  //  let history = useHistory();
  return <div>
    <Navbar>
      <Container>

        {/* React-Bootstrap */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">

              <img
                src='/logo.png'
                alt="logo"
                width={160}
                height={50}
                href="/"
              />
            </Nav.Link>

            <NavDropdown title="Services">
              <NavDropdown.Item href="/ui-uxdesign">UI Design Services</NavDropdown.Item>
              <NavDropdown.Item href="software-development">Software Development Services</NavDropdown.Item>
              <NavDropdown.Item href="mobile-development">Mobile Application Development</NavDropdown.Item>
              <NavDropdown.Item href="app-development">Application Development Services</NavDropdown.Item>
              <NavDropdown.Item href="ecommece-development">E-Commerce Services</NavDropdown.Item>
              <NavDropdown.Item href="api-integration">App Integration & Development Services</NavDropdown.Item>
              <NavDropdown.Item href="custom-software">Custom Software Development Services</NavDropdown.Item>
              <NavDropdown.Item href="">Enterprice Application Development Services</NavDropdown.Item>
              <NavDropdown.Item href="">Software Testing</NavDropdown.Item>
              <NavDropdown.Item href="hirededicated">Hire Dedicated Developers</NavDropdown.Item>
              <NavDropdown.Item href="">Software Product Development Services</NavDropdown.Item>
              <NavDropdown.Item href="dedicated">Dedicated Software Development Services</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/company">Company</Nav.Link>
            <NavDropdown title="Technologies" id="basic-nav-dropdown">
              <Row xs={2} md={8} lg={18}>
                <Col>
                  <NavDropdown.Item>Front End</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="angular">Angular</NavDropdown.Item>
                  <NavDropdown.Item href="backbone">Backbone.js</NavDropdown.Item>
                  <NavDropdown.Item href="ember">EmberJS</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">JavaScript</NavDropdown.Item>
                  <NavDropdown.Item href="react">React JS</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Vue.js</NavDropdown.Item>
                </Col>

                <Col>
                  <NavDropdown.Item>Back End</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Golang</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">JAVA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Laravel</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">.NET</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">.NET Core</NavDropdown.Item>
                  <NavDropdown.Item href="node">Node JS</NavDropdown.Item>
                  <NavDropdown.Item href="php">PHP</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Python</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Ruby on Rails</NavDropdown.Item>
                </Col>
              </Row>
            </NavDropdown>
            <NavDropdown title="Hire" >
              <NavDropdown.Item href="node">Hire Nodejs Developers </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider></NavDropdown.Divider>
            <Nav.Link href="/Career">Career</Nav.Link>
            <Nav.Link href="/Aboutus">About Us</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger" className='rounded-pill'>

              Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>;
};

export default Header;