import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    // handleClick = () => {
    //     this.props.addToOrder(this.props.index);
    // }

    render() {

        // Destrucring to make it easier to type
        const {image, name, price, desc, status } = this.props.details;

        const isAvailable = status === 'available';
        return (
            <li className="menu-fish">
                {/* <image src={this.props.details.image} alt={this.props.details.name} />
                <h3 className="fish-name">{this.props.details.name}</h3> */}

                {/* Using destructing instead - cleaner */}
                <img src={image} alt={name} />
                <h3 className="fish-name">{name}
                    <span>{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                {/* <button disabled={!isAvailable} onClick={this.handleClick}> */}
                <button disabled={!isAvailable} onClick={() => {this.props.addToOrder(this.props.index)}}>
                    {isAvailable ? 'Add to Order' : 'Sold Out'}
                </button>
            </li>
    
        );
    }
}

export default Fish; 