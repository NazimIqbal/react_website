import React from 'react';
import NavbarPage from "../../Navbar/Navbar";
import Footer from "../Footer";
import "./../../scss/webDevelopment.scss";
import "./waterFilter.scss"

import HorizontalCard from '../Horizontal-Cards/HorizontalCard';
import CardRightImage from '../Horizontal-Cards/CardRightImage';

import PlantImage from './../../assets/images/Filter-water/ss-plant-img1.webp';
import FilterCards from './../Horizontal-Cards/FilterCards';



const WaterFilter = () => {
    return (
        <>
            <NavbarPage/>
            <div className="container-fluid plant-img1">
                <div className="text-container">
                    <h1 className="web-text">
                        WATER <span style={{color:"red"}}>PURIFICATION</span> 
                    </h1>
                    <h3 className='h-3 filter-text'>Satisfied every client of projects by our.</h3>
                    <h5 className="filter-text">
                    Web development is the work involved in developing a website for the Internet or an intranet.
                    </h5>
                </div>
            </div>
            <h1 className="web-develop">
                <span className='underline'>WATER</span> <span className='dev-underline' style={{color:"red"}}>PURIFICATION</span> 
            </h1>
            <div className="image-container">
                <img src={PlantImage} alt="Plant" className="plant-img1" />
            </div>
            <div>
                <HorizontalCard />
                <CardRightImage/>
                <FilterCards/>

            </div>
            <Footer/>
        </>
    );
}

export default WaterFilter;