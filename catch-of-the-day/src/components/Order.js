import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    // Splitting out some of the code below
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        // Module 19 - add a check to see if there IS a fish 
        const isAvailable = fish && fish.status === 'available';
        if (!fish) return null;         // add this so we dont render until the fish loads; wont continue until loaded

        // If the fish is not available display it as such
        if (!isAvailable) {
            return (
                // unqiue key prop (so react can easily find it)
                <li key={key}>
                    {/* this is a fallback in case the fish gets deleted from inventory */}
                    {/* if there is a fish name - it displays; if not  just says 'fish' */}
                    Sorry {fish ? fish.name : 'fish'} is no longer available
                </li>
            );
        }

        // otherwise display it
        return (
            // unqiue key prop (so react can easily find it)
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        // Takes in some data and returns a tally
        const total = orderIds.reduce( (prevTotal, key) => {
            // Access the fish that is coming in
            const fish = this.props.fishes[key];
            //Get the number ordered
            const count = this.props.order[key];
            
            // Need to know if it is available 
            const isAvailable = fish && fish.status === 'available';
            
            if (isAvailable) {
                // return the running total plus 
                return prevTotal + (count * fish.price)
            } 
            
            // if not available just 'skip it' and return the previous total
            //NOTE: the 0 below is our starting point for prevTotal
            return prevTotal
        }, 0);

        return (
            <div className="order-wrap">
                <h2>orrrrder</h2>
                <ul className="order">
                    {/* maps each key in the orderIds array to a list item */}
                    {/* {orderIds.map(key => <li>{key}</li>)} */}
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    Total: 
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;