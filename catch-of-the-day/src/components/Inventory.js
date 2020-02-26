import React from 'react';
import AddFishForm from './AddFishForm'; 

class Inventory extends React.Component {


    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {/* NOTE: addFish has been passed via props (ie. doesnt actually live here) - so it is no longer this.addFish*/}
                <AddFishForm addFish={this.props.addFish}/>
            </div>
        )
    }
}

export default Inventory;