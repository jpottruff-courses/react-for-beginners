import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        //Need to use REACT SetState API
        // 1. Take a copy (NOTE: object spread)
        const fishes = { ...this.state.fishes };

        // 2. Add new fish to copy
        // NOTE: using a timestamp - easier
        fishes[`fish${Date.now()}`] = fish;

        // 3. Set new fishes object ot state (build in React method)
        this.setState({
            fishes: fishes
        });

        // Cleaner
        // this.setState({ fishes });

        console.log(this.state.fishes);
    }


    render() {
        return (
            <div className="catch-of-the-day">

                <div className="menu">
                    {/* <Header /> */}
                    <Header tagline="Custom tagline PROPS" notStringNumberProp={10} propsNotString={true}/>  {/* Example of sending in PROPS */}
                </div>
                <Order />
                {/* Passing down function with PROPS */}
                <Inventory addFish={this.addFish} />
            </div>
        )
    }



}

export default App;