import Navbar from "../components/Header";
import Hero from "../components/Hero";
import AboutImg from "../assets/boats.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

export default function Service() {
    return (
        <div>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={AboutImg}
            btnClass="hide"/>
            <Trip />
            <Footer/>
        </div>
    )
}