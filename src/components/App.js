import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Articles from './Articles';
import Home from './Home';
import Contact from './Contact';
import Header from './Header'

const App = () => (
    <BrowserRouter>
    <div>
        < Header />
        <Route exact path="/" component={Home}/>
        <Route path="/articles" component={Articles}/>
        <Route path="/contact" component={Contact}/>

    </div>
    </BrowserRouter>
);

export default App;
