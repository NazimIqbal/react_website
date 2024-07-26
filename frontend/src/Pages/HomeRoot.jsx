import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import logo from './../assets/logo.webp';
import centerImage from './../assets/center-image.webp';
import icon1 from './../assets/icon1.webp';
import icon2 from './../assets/icon2.webp';
import icon3 from './../assets/icon3.webp';
import icon4 from './../assets/icon4.webp';
import icon5 from './../assets/icon5.webp';
import icon6 from './../assets/icon6.webp';
import icon7 from './../assets/icon7.webp';
import icon8 from './../assets/icon8.webp';
import icon9 from './../assets/icon9.webp';
import './../scss/homeRoot.scss';
import { Link } from 'react-router-dom';

const HomeRoot = () => {


    return (
        <div className='main-div'>
            <div className="gradient-background">
                <Container fluid >
                <Row className="header" style={{textAlign:'left'}}>
                    <Col md={12}>
                    <Link to='/home'>
                    <Image src={logo} className="logo" alt="Umesh Modi Group Logo" />
                    </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{textAlign:"left"}}>
                    <Col md={12}>
                    <h1>FMMK GROUP</h1>
                    {/* <h2>Lucknow</h2> */}
                    </Col>
                </Row>
                <Row className="content-section">
                    <Col md={4} className="info-section">
                    <ul className="info-list">
                        <li>Over 15 international collaboration.</li>
                        <li>32 branch offices across India.</li>
                        <li>Over 10,500 committed employees.</li>
                        <li>Supported by 16 production units including one in Sri Lanka & Bangladesh.</li>
                        <li>2 R & D centers.</li>
                        <li>International offices in Bangladesh, Sri Lanka, Nepal, Kenya, Myanmar, Uganda, Tanzania, Nigeria, Tajikistan & Singapore.</li>
                    </ul>
                    </Col>
                    
                    <Col md={8} className="center-image-section text-center" style={{ marginTop: "40px" }}>
                    <div className="circle">
                        <div className="center-image-wrapper">
                        <Link to={'/home'}>
                            <Image src={centerImage} className="center-image" alt="Red Fort" />
                        </Link>
                        </div>
                        <div className="icon-wrapper icon1"><Link to={'/home'}><Image src={icon1} className="icon" alt="Icon 1" /></Link></div>
                        <div className="icon-wrapper icon2"><Link to={'/home'}><Image src={icon2} className="icon" alt="Icon 2" /></Link></div>
                        <div className="icon-wrapper icon3"><Link to={'/home'}><Image src={icon3} className="icon" alt="Icon 3" /></Link></div>
                        <div className="icon-wrapper icon4"><Link to={'/home'}><Image src={icon4} className="icon" alt="Icon 4" /></Link></div>
                        <div className="icon-wrapper icon5"><Link to={'/home'}><Image src={icon5} className="icon" alt="Icon 5" /></Link></div>
                        <div className="icon-wrapper icon6"><Link to={'/home'}><Image src={icon6} className="icon" alt="Icon 6" /></Link></div>
                        <div className="icon-wrapper icon7"><Link to={'/home'}><Image src={icon7} className="icon" alt="Icon 7" /></Link></div>
                        <div className="icon-wrapper icon9"><Link to={'/home'}><Image src={icon9} className="icon" alt="Icon 9" /></Link></div>
                        <div className="icon-wrapper red-fort"><h4>Red Fort</h4></div>
                        
                    </div>
                    {/* <p className="image-caption" >Laxmi Narayan Mandir (Circa : 1963), Modinagar</p> */}
                    </Col>
                </Row>
                </Container>
            </div>
            <div className='continue-website'>
                {/* <Col md={12} className='continue-btn'> */}
                    <Link to={'/home'}>
                    <Button><h4>Continue To Website &gt;&gt;</h4></Button>
                    </Link>
                {/* </Col> */}
            </div>
        </div>
      );
}

export default HomeRoot;
