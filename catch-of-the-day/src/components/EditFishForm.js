import React from "react";

class EditFishForm extends React.Component {

    handleChange = event => {
        console.log(event.currentTarget.value);

        // Update that Fish
        // 1. Take a copy of the current fish
        const updatedFish = {
            ...this.props.fish,    // take a copy of the current fish

            // Computed Property Names (new in ES6 - basically the field to be updated can be dynamic )
            // This is why we put a NAME attribute on our fish below
            [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(updatedFish);

        // 2. Use the method we passed down to update the state
        // This sends it UPSTEAM
        this.props.updateFish(this.props.index, updatedFish);


    }

    render() {
        return <div className="fish-edit">
            {/* NOTE: WE ARE NOT USING DEFAULT VALUE HERE */}
            <input type="text" 
                   name="name"
                   onChange={this.handleChange} 
                   value={this.props.fish.name} />
            <input type="text" 
                   name="price"
                   onChange={this.handleChange} 
                   value={this.props.fish.price} />
            <select name="status"
            onChange={this.handleChange} 
                    value={this.props.fish.status} >
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc"
            onChange={this.handleChange} 
                      value={this.props.fish.desc} />
            <input type="text" 
                   name="image"
                   onChange={this.handleChange}
                   value={this.props.fish.image} />
            
            {/* <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button> */}
        </div>
    }
}

export default EditFishForm;