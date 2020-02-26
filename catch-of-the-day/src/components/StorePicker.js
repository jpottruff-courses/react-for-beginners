import React from 'react';
import { getFunName } from "../helpers";


class StorePicker extends React.Component {
    
    // Added constructor in Module 11
    constructor() {
        super();
        // console.log("Gonna create it");
        //Bind our methods so we can reference 'this' (allows us to reference 'this' (ie. the instance of the component) in goToStore)
        this.goToStore = this.goToStore.bind(this);
    }

    // REFS
    myInput = React.createRef();


    //click handler method (test)
    // handleDemoClick() {
    //     alert('heeeeeey');
    // }

    // // (WORKS WITH CONSTRUCTOR) on Submit - note - method on the form
    // goToStore(event) {
    //     // console.log('going....');

    //     // 1. Stop form from submitting 
    //     event.preventDefault(this);

    //     // 2. Get text from input
    //     console.log(this.myInput);
    //     console.log(this);

    //     // 3.
    // } 

    // on Submit - note - method on the form
    
    
    // Turn goToStore into a PROPERTY (which in this case is an arrow function)
    goToStore = event => {
        // console.log('going....');
        // console.log(this);

        // 1. Stop form from submitting 
        event.preventDefault();

        // 2. Get text from input
        // console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value;

        // 3. Change the page (move history with it)
        this.props.history.push(`/store/${storeName}`);
    } 

    // render is a REQUIRED method
    render() {
        return ( 
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                {/* I'm a comment */}
                <h2>Please Enter a Store</h2>

                {/* <button onClick={this.handleDemoClick}> Click me! </button> */}

                <input  type="text" 
                        ref={this.myInput}
                        required 
                        placeholder="Store Name" 
                        defaultValue={getFunName()}>        
                </input>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

// MUST export as default from this file as well 
export default StorePicker;
