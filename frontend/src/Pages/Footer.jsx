import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './../scss/footer.scss';
import Logo from './../assets/logo.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className='footer' style={{margin: '20px'}}>
          <Row>
            <Col md={3}>
              {/* <a href="index.html"> */}
                <img
                //   src="https://logo-download.com/wp-content/data/images/2021/08/Levi_Strauss__Co.-Logo.png"
                src={Logo}
                alt="image loading..."
                className="logo-footer"
                />
              {/* </a> */}
              <div className="footer-about">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s.
                </p>
              </div>
            </Col>
            <Col md={2}>
              <div className="useful-link">
                <h2>Pages</h2>
                {/* <img src="path/to/home_line.png" alt="Decoration line" className="img-fluid" /> */}
                <div className="use-links">
                  <ul className='ul-class'>
                    <li>
                      <Link to="/home" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactUs" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> ContactUs
                      </Link>
                    </li>
                    <li>
                      <Link to="/research" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> R & D
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> Career
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="useful-link">
                <h2>Services</h2>
                <div className="use-links">
                  <ul className='ul-class'>
                    <li>
                      <a href="" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right m-0 p-0 m-lg-0"></i> Software Development
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right m-0"></i> Web Development
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> Advertisement
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> Construction
                      </a>
                    </li>

                    <li>
                      <a href="" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> Writing Instruments
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none">
                        <i className="fa-solid fa-angles-right"></i> Filter Water
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="social-links">
                <h2>Follow Us</h2>
                {/* <img src="path/to/home_line.png" alt="Decoration line" /> */}
                <div className="social-icons">
                  <ul className='ul-class'>
                    <li>
                      <a href="https://www.facebook.com/johndoe" target='_blank' className="text-decoration-none">
                        <i className="fa-brands fa-facebook-f"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/YOUR_PROFILE" target='_blank' className="text-decoration-none">
                        <i className="fa-brands fa-instagram"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/YOUR_PROFILE" target='_blank' className="text-decoration-none">
                        <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/1234567890" target='_blank' className="text-decoration-none">
                        <i className="fa-brands fa-whatsapp"></i> WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="address">
                <h2>Address</h2>
                {/* <img src="path/to/home_line.png" alt="Decoration line" className="img-fluid" /> */}
                <div className="address-links">
                  <ul className='ul-class'>
                    {/* <li className="address1">
                      <i className="fa-solid fa-location-dot"></i> Kolathur Ramankulam, Malappuram Dt, Kerala 679338
                    </li> */}

                    <li className="address1">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=New+Delhi+Nehru+Place+110020"
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-location-dot"></i> Nehru Place New Delhi 110020
                      </a>
                    </li>


                    <li>
                      <a href="tel:+9190904500112" className="text-decoration-none">
                        <i className="fa-solid fa-phone"></i> +91 90904500112
                      </a>
                    </li>
                    <li>
                      <a href="mailto:mail@1234567.com" className="text-decoration-none">
                        <i className="fa-solid fa-envelope"></i> mail@1234567.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="copy-right-sec">
        <div className="text-center">
          <span >Copyright &copy; {new Date().getFullYear()} FmmK Group</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
