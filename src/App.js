import React from 'react';
import './App.scss';
import Menu from './components/menu/Menu';
import Home from './components/Home';
import Firefly from './components/Firefly';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {github } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
      <div className="App">
        <header>
          <Menu/>
        </header>
        <div>
          <Home />
          <Firefly />
        </div>
      </div>
  );
}


