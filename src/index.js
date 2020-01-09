import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Cards from './Cards';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/projects" component={Cards} />
            <Route path="/contact" component={Contact} />
            <Route path="/skills" component={Skills} />
            <Route path="/about" component={About} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
