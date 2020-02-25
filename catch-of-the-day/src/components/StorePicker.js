import React from 'react';
import { getFunName } from "../helpers";


class StorePicker extends React.Component {

    // render is a REQUIRED method
    render() {
        return ( 
            <form action="" className="store-selector">
                {/* I'm a comment */}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}></input>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

// MUST export as default from this file as well 
export default StorePicker;
