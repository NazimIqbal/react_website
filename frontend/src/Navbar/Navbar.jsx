import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.scss";
// import { BsChevronDown } from 'react-icons/bs';
import { BsChevronDown, BsX, BsList } from 'react-icons/bs';

import OffCanvas from '../Pages/OffCanvas';

function NavbarPage() {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };



  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top" collapseOnSelect>
      <Navbar.Brand href="#" className='navbar-brand'>Navbar scroll</Navbar.Brand>
      
      {/* <Navbar.Toggle aria-controls="navbarScroll" className='toggle nav-padding' /> */}
      <Navbar.Toggle 
        aria-controls="navbarScroll" 
        className='toggle nav-padding' 
        onClick={handleToggle}
      >
        {isToggled ? <BsX className='close-btn'/> : <BsList className='close-btn'/>}
      </Navbar.Toggle>

      <Navbar.Collapse id="navbarScroll" className="justify-content-end cc">
        <Nav className="mr-auto nav-padding" navbarScroll>
          <Nav.Link as={NavLink} className='text-color' to={"/home"} exact>Home</Nav.Link>
          <Nav.Link as={NavLink} className='text-color'  to={"/about-us"}>About Us</Nav.Link>
          {/* <Nav.Link as={NavLink} to="/services">Services</Nav.Link> */}
          <Nav.Link as={NavLink} className='text-color'  to="/products">Products</Nav.Link>
          <Nav.Link as={NavLink} className='text-color'  to="/contactUs">Contact Us</Nav.Link>
          <Nav.Link as={NavLink} className='text-color research' to="/research">R & D</Nav.Link>

          {/* Custom Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Services <BsChevronDown /></button>
            <div className="dropdown-content">
              <Link to="/web-development">Web Development</Link>
              <Link to="/water-filter">Water Filter</Link>
              <Link to="/construction">Construction</Link>
              <Link to="#">Writing Instruments</Link>
            </div>
          </div>

          {/* <div className='d-btn'>
          <OffCanvas/>
          </div> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPage;