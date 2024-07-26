
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import WebDevelopment from './Pages/WebDevelopment';
import Layout from './Pages/Layout/Layout';
import HomeRoot from './Pages/HomeRoot';
import ContactUs from "./Contact";
import Products from './Pages/Products';
import Home from './Pages/Home';
import RandD from './Pages/RandD';

// water filter
import WaterFilter from './Pages/Water-Filter/WaterFilter';
// Construction Page
import Construction from './Pages/Construction/Construntion';

function App() {
  return (
    <>
      {/* <div> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeRoot />} />
              <Route path="/home" element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="web-development" element={<WebDevelopment />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="products" element={<Products />} />
              <Route path="research" element={<RandD />} />
              <Route path='water-filter' element={<WaterFilter/>} />
              <Route path='construction' element={<Construction/>} />
            </Route>
          </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
