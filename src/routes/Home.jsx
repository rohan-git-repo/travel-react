import Navbar from "../components/Header";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import img from "../assets/road.jpg";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero cName="hero"
            heroImg={img}
            title="Your Journey Starts Here"
            buttonText=""
            url=""
            btnClass="hide"/>           
            <Destination />
            <Trip />
            <Footer />
        </div>
    )
  
      
}