import Beach1 from "../assets/phuket.jpg";
import Beach2 from "../assets/buddha.jpg";
import Beach3 from "../assets/tower.jpg";
import Beach4 from "../assets/champs.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <DestinationData 
            className="first-des"
            heading="Paris: City of Lights and Landmarks"
            text="Paris is a must-visit destination in France. The iconic Eiffel Tower pierces the Parisian skyline, offering breathtaking panoramic views from its summit. Art enthusiasts will be in awe of the vast collections housed in the Louvre Museum, including the enigmatic Mona Lisa.  A stroll down the Champs-Élysées, a famous avenue lined with shops, cafes, and theaters, is a quintessential Parisian experience"
            img1={Beach3}
            img2={Beach4}/>

            <DestinationData 
            className="first-des-reverse"
            heading="Phuket: Beaches, Big Buddha and Beauty"
            text="Phuket, Thailand's largest island, is a paradise for beach lovers.  The west coast boasts a string of idyllic beaches, each with its own unique charm. Phuket Town, the island's capital, offers a glimpse into Thai culture with its bustling markets, delectable street food scene, and ornate temples like Wat Chalong.  Venture inland to explore hidden waterfalls, trek through lush rainforests, or visit the Big Buddha statue for panoramic views of the island"
            img1={Beach1}
            img2={Beach2}/>
        </div>
    )
}

export default Destination;