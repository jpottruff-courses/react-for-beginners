import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';                 //To use JSX

import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

//Note: Stateless Functional COmponent (dont forget to render on your mounting point (ie. index.js))
const Router = () => (
    <BrowserRouter>
        <Switch>
            {/* Routes go here */}

            {/* For the exact matches on the '/' path - render the StorePicker Component */}
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        
        </Switch>
    </BrowserRouter>
);

export default Router;