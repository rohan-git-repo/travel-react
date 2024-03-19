import Navbar from "../components/Header";
import Hero from "../components/Hero";
import AboutImg from "../assets/caps.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={AboutImg}
            btnClass="hide"/>
            <ContactForm />
            <Footer />
        </div>
    )
}