import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/menu/Navbar';
import Home from './components/Home';
import Firefly from './components/Firefly';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
      <div className="App">
        <header>
          <Navbar 
            navbarState={this.state.navbarOpen} 
            handleNavbar={this.handleNavbar}
          />
        </header>
        <div>
          <Home />
          <Firefly />
        </div>
      </div>
      </>
    )
  }
}

export default App;
