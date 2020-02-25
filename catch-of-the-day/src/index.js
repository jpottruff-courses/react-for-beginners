// Import Dependencies
import React from 'react';
import { render } from 'react-dom';                     // NOTE: cherrypicking the render method, don't need the whole package for this one 
import Router from './components/Router';               // Import the Router
// import StorePicker from './components/StorePicker';     // Will be landing page (note - this will be used indirectly in the Router file - no longer need them here)
// import App from './components/App';                     // Will be after landing page via routing; (note - this will be used indirectly in the Router file - no longer need them here)
import './css/style.css'; 

// NOTE: this is the render from react-dom 
// render(<p>HEEEEEY</p>, document.querySelector('#main'));
// render(<StorePicker></StorePicker>, document.querySelector('#main'));

// Will be First Page w/ routing later on
// render(<StorePicker />, document.querySelector('#main'));


// render(<App />, document.querySelector('#main'));
render(<Router />, document.querySelector('#main'));