import NavbarPage from "../Navbar/Navbar";
import SliderPage from "../Slider/SliderPage";
import Cards from "../Cards/Cards";
import Footer from "./Footer";

const Home = () => {
    return ( 
        <>
        <NavbarPage />
        <SliderPage/>
        <Cards/>
        <hi>Home</hi>
        <Footer/>
        </>
     );
}
 
export default Home;