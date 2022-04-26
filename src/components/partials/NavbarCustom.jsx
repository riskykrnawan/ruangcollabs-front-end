import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

function NavbarCustom() {
  return (
    <Navbar className="bg-navy bg-2 sticky-top" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="text-white">
          <img src="./images/icons/rc-logo-2.png" className="logo" alt="rc-logo" />
          <span>
            ruangCollab
          </span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 btn-not-focus" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex nav-search position-relative t-6 m-b-6">
              <FormControl
                type="search"
                placeholder="Search"
                className="m-r-40 rounded-pill bg-light"
                aria-label="Search"
              />
            </Form>
            <div className="p-r-30">
              <Nav.Link active href="/#" className="text-white">Kolaborasi Proyek</Nav.Link>
            </div>
            <div className="p-r-30">
              <Nav.Link disabled href="/lowongan-kerja" className="text-light opacity-50">Lowongan Kerja</Nav.Link>
            </div>
            <div className="p-r-30">
              <Nav.Link disabled href="/lowongan-magang" className="text-light opacity-50">Lowongan Magang</Nav.Link>
            </div>
          </Nav>
          <Dropdown>
            <ul>
              <li className="text-center d-inline-block m-r-10">
                <a href="/notifications">
                  <i className="bx fs-3 position-relative t-8 bxs-conversation text-white" />
                </a>
              </li>
              <li className="text-center d-inline-block m-r-30">
                <a href="/inbox">
                  <i className="bx fs-3 position-relative t-8 bxs-bell text-white" />
                </a>
              </li>
              <li className="text-center d-inline-block">
                <Dropdown.Toggle variant="transparent" className="text-white btn-not-focus">
                  <i className="bx fs-3 position-relative t-3 bxs-user-circle" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/profile" className="dropdown-item">
                    Profil
                  </Link>
                  <Link to="/profile#my-project" className="dropdown-item">
                    My Project
                  </Link>
                  <Link to="/setting" className="dropdown-item">
                    Setting
                  </Link>
                  <Link to="/login" className="dropdown-item">
                    Sign out
                  </Link>
                </Dropdown.Menu>
              </li>
            </ul>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
