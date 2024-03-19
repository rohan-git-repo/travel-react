import Navbar from "../components/Header";
import Hero from "../components/Hero";
import AboutImg from "../assets/baloon.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


export default function About() {
    return (
        <div>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={AboutImg}
            btnClass="hide"/>
            <AboutUs />
            <Footer />
        </div>
    )
}