import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/france.jpg";
import Trip2 from "../assets/thai.jpg";
import Trip3 from "../assets/rico.jpg";

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading = "France"
                text="France stretches from the Atlantic Ocean in the west to the Mediterranean Sea in the south. Imagine strolling down the Champs-Élysées in Paris, marveling at the iconic Eiffel Tower, or gazing at the masterpiece Mona Lisa in the Louvre Museum"
                />
                <TripData 
                image={Trip2}
                heading = "Thailand"
                text="The Land of Smiles welcomes visitors with its vibrant culture, delicious street food, and stunning natural beauty.  Immerse yourself in the spiritual atmosphere by exploring ornate temples like Wat Phra Doi Suthep in Chiang Mai or Wat Pho in Bangkok, housing the Reclining Buddha"
                />
                <TripData 
                image={Trip3}
                heading = "Puerto Rico"
                text=" Puerto Rico is nestled in the heart of the Caribbean Sea. Explore the charming and colorful colonial architecture of San Juan, the capital city, or delve into the island's rich history at El Morro, a majestic Spanish fort"
                />
            </div>
        </div>
    )
}

export default Trip;