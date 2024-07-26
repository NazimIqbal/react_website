import React from 'react';
import NavbarPage from "../Navbar/Navbar";
import Footer from "./Footer";
// import Services_img1 from "./../assets/images/service1.webp";
// import webImg1 from "./../assets/images/web-img1.webp";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./../scss/webDevelopment.scss";

import HorizontalCard from './Horizontal-Cards/HorizontalCard';
import CardRightImage from './Horizontal-Cards/CardRightImage';
import Cards from './Horizontal-Cards/Cards';
const WebDevelopment = () => {
    return ( 
        <>
            <NavbarPage/>
            <div className="container-fluid ser-img1">
                <div className="text-container">
                    <h1 className="web-text">
                        WEB <span style={{color:"red"}}>DEVELOPMENT</span> 
                    </h1>
                    <h3 className='h-3'>Satisfied every client of projects by our.</h3>
                    <h5 className="text">
                    Web development is the work involved in developing a website for the Internet or an intranet.
                    </h5>
                </div>
            </div>
            <h1 className="web-develop">
                <span className='underline'>WEBSITES</span> <span className='dev-underline' style={{color:"red"}}>DEVELOPMENT</span> 
            </h1>
            <div>
                {/* <h1 style={{ marginTop:"100px" }}>Services Page</h1> */}
                <HorizontalCard />
                <CardRightImage/>
                <Cards/>

            </div>
            <Footer/>
        </>
    );
}

export default WebDevelopment;







// import NavbarPage from "../Navbar/Navbar";
// import Footer from "./Footer";
// import Services_img1 from "./../assets/images/service1.webp";
// // import { Row } from "react-bootstrap";
// import "./../scss/services.scss";

// import { Container, Row, Col, Button } from 'react-bootstrap';
// const Services = () => {
//     return ( 
//         <>
//         <NavbarPage/>

//         <div className="container-fluid d-flex justify-content-center ser-img1">
            
//             <h1 className="col-12 text" >
//             GO EXTRA MILE FOR YOUR CUSTOMERS
//             </h1>
//             <h4 className="col-12 text">
//             Establish Customer Relationship Management System to build trust with customers.
//             </h4>
            
//         </div>
//                     <h1 style={{ marginTop:"100px" }}>Services Page</h1>

//         <Footer/>
//         </>
//      );
// }
 
// export default Services;