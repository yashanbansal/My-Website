import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home.jsx';
import Survices from './Survices.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import {Switch ,Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar.jsx';

const App = () => {
    return (
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/survices" component={Survices}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/" />
    </Switch>
     
    </>
    );
}

export default App;