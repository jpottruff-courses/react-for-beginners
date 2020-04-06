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
        fishes: {},                     // persisting this in firebase
        order: {}                       // persisting this in local        
    };

// Module 18 - Adding lifecycle method
componentDidMount() {
    console.log('Mounted!!!!!!');
    const { params } = this.props.match;

    //Module 19 - Local Storage reinstatement
    const localStorageRef = localStorage.getItem(params.storeId);
    
    // Sometimes there will be no matching store - we only need to load it if there is.
    //  Also remember we stringified the Objkect - need to reverse that with JSON parse
    if (localStorageRef) {
        this.setState({ order: JSON.parse(localStorageRef) })
    }
    
    // note ref in this context are references to a peice of data in the database
    // NOT like the refs we did earlier 
    // we want to sync the data ONLY With the store name we are currently in 
    // can use the React Router

   
    // Sync State also requires an Object of options
    this.ref = base.syncState(`${params.storeId}/fishes`, {
        //Options
        context: this,
        state: 'fishes'
    });

}

// Module 19 - using local storage with this one 
componentDidUpdate() {
    console.log('IT UPDATED');
    console.log(this.state.order);
    
    // Key value pair of the STORE and ORDER (BUT this will have a value of [object Object] - it is expecting a string)
    // localStorage.setItem(this.props.match.params.storeId, this.state.order);
    
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));

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

    // Module 20: will be coming in from Edit Fish -> Inventory -> App
    updateFish = (key, updatedFish) => {
        // 1. Take a copy of the current STATE (NOTE: not props - we are in the componenet where the STATE is living)
        const fishes = { ...this.state.fishes};

        // 2. Update the state
        fishes[key] = updatedFish; 

        // 3. Set that to State
        this.setState( {fishes} );
    }

    deleteFish = (key) => {
        // 1. Take a copy of state 
        // (NOTE: we keep copying state becuase it is an OBJECT; If it was an array we could probably 1 line this )
        const fishes = { ...this.state.fishes };

        // 2. Delete fish 
        fishes[key] = null;

        // 3. Udpdate the state
        this.setState({fishes});
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

    // Module 21
    removeFromOrder = key => {
        // 1. Take a copy of state
        const order = {...this.state.order};

        // 2. Remove from the order (NOTE: can use delete here cause not mirroring to firebase)
        delete order[key];

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
                    removeFromOrder={this.removeFromOrder}
                />

                {/* We can use an Object Spread instead - but you can run into problems - just an option*/}
                {/* Basically dont pass down your ENTIRE state - but you could do it with an object */}
                {/* <Order {...this.state} /> */}

                {/* Passing down function with PROPS */}
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish} 
                    deleteFish={this.deleteFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes}
                />
            </div>
        )
    }



}

export default App;