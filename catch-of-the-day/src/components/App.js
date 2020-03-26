import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

import base from '../base';

class App extends React.Component {
// STATE
    state = {
        fishes: {},
        order: {}
    };

// Module 18 - Adding lifecycle method
componentDidMount() {
    console.log('Mounted!!!!!!');
    
    // note ref in this context are references to a peice of data in the database
    // NOT like the refs we did earlier 
    // we want to sync the data ONLY With the store name we are currently in 
    // can use the React Router

    const { params } = this.props.match;
    // Sync State also requires an Object of options
    this.ref = base.syncState(`${params.storeId}/fishes`, {
        //Options
        context: this,
        state: 'fishes'
    });

}

// This method helps us clean up when the component is UMOUNTED  (must clean up any memory issues)
// Example - going back (ie. clicking back) to the store pciker? stop listening for changes on current store
componentWillUnmount() {
    // console.log('UNMOUNTING');
    
    // 1. Remove bining to the ref (ie. current store)_- see above
    base.removeBinding(this.ref);
}

// LIFECYCLE EVENTS

    addFish = fish => {
        //Need to use REACT SetState API
        // 1. Take a copy (NOTE: object spread)
        const fishes = { ...this.state.fishes };

        // 2. Add new fish to copy
        // NOTE: using a timestamp - easier
        fishes[`fish${Date.now()}`] = fish;

        // 3. Set new fishes object ot state (build in React method)
        // this.setState({
        //     fishes: fishes
        // });

        // Cleaner
        this.setState({ fishes });

        // console.log(this.state.fishes);
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    }

    addToOrder = key => {
        // 1. Take a copy of state
        const order = {...this.state.order};

        // 2. Either ADD to order OR INCREMENT Amoutn
        order[key] = order[key] + 1 || 1;

        // 3. Call setState to update the state object
        this.setState({ order });
    }

//CUSTOM STUFF
// ...

// RENDER
    render() {
        return (
            <div className="catch-of-the-day">

                <div className="menu">
                    {/* <Header /> */}
                    <Header tagline="Custom tagline PROPS" notStringNumberProp={10} propsNotString={true}/>  {/* Example of sending in PROPS */}
                    {/* Fish Added in module 15 */}
                    <ul className="fishes">
	                    {Object.keys(this.state.fishes).map( key => (
                            <Fish 
                                key={key} 
                                index={key} 
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder} 
                            /> 
                        ))}
                    </ul>
                </div>
                {/* Module 17 - Passing the order down */}
                {/* We could do it this way ... but since we are essentially passing down all State...*/}
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order}
                />

                {/* We can use an Object Spread instead - but you can run into problems - just an option*/}
                {/* Basically dont pass down your ENTIRE state - but you could do it with an object */}
                {/* <Order {...this.state} /> */}

                {/* Passing down function with PROPS */}
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                />
            </div>
        )
    }



}

export default App;