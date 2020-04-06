import React from 'react';
import AddFishForm from './AddFishForm'; 
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {


    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {/* Module 20 - Adding Edit Fish */}
                {Object.keys(this.props.fishes).map(key =>
                    <EditFishForm key={key}
                                  index={key} 
                                  fish={this.props.fishes[key]}
                                  updateFish={this.props.updateFish}
                                  deleteFish={this.props.deleteFish}
                    />
                )}
                {/* NOTE: addFish has been passed via props (ie. doesnt actually live here) - so it is no longer this.addFish*/}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;