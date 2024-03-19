import "./DestinationStyles.css";
import Beach1 from "../assets/phuket.jpg";
import Beach2 from "../assets/buddha.jpg";
import Beach3 from "../assets/tower.jpg";
import Beach4 from "../assets/champs.jpg";
import { Component } from "react";

class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
}

export default DestinationData;