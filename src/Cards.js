import React from 'react';
import './Cards.scss';
import shareEat from './images/share-eat.jpg';
import nerdLogo from './images/nerd-logo.png';
import ticTac from './images/tic-tac-toe.jpg';
import wordpress from './images/wordpress.png';
import Menu from './components/menu/Navbar';

export default class Cards extends React.Component {
    state = {
        navbarOpen: false
      }
    
      handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
      }

    render() {
        return(
            <div className="cards-wrapper">
            <Menu 
            navbarState={this.state.navbarOpen} 
            handleNavbar={this.handleNavbar}
            />    
            <h1 id="#projects">Projects</h1>
            <div className="cols">
                      <div className="col" ontouchstart="this.classList.toggle('hover');">
                          <div className="container">
                              <div className="front">
                                  <div className="inner">
                                    <img src={shareEat} className="share-logo" alt="share-eat" />
                                  </div>
                              </div>
                              <div className="back">
                                  <div className="inner">
                                    <p>Share Eat</p>
                                    <span>Restaurant Curation App (Front-End Challenge)</span>
                                    <a href="http://share-eat.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                        <button className="links"> Demo </button>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col" ontouchstart="this.classList.toggle('hover');">
                          <div className="container">
                              <div className="front">
                                  <div className="inner">
                                      <img src={nerdLogo} className="nerd-logo" alt="nerd-logo" />
                                  </div>
                              </div>
                              <div className="back">
                                  <div className="inner">
                                        <p>Shopping Cart</p>
                                        <span>Simple Shopping Cart made with React and Redux</span>
                                        <a href="http://cart-phi.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <button className="links"> Demo </button>
                                        </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col" ontouchstart="this.classList.toggle('hover');">
                          <div className="container">
                              <div className="front">
                                  <div className="inner">
                                        <img src={ticTac} className="tic-tac-logo" alt="tic-tac-logo" />
                                  </div>
                              </div>
                              <div className="back">
                                  <div className="inner">
                                    <p>Tic Tac Toe</p>
                                    <span>Tic Tac Toe Game made with ReactJS</span>
                                <a href="http://tic-tac-web.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <button className="links"> Demo </button>
                                </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col" ontouchstart="this.classList.toggle('hover');">
                          <div className="container">
                              <div className="front">
                                  <div className="inner">
                                      <img src={wordpress} className="wp-logo" alt="wp-logo"/>
                                  </div>
                              </div>
                              <div className="back">
                                  <div className="inner">
                                        <p>Aurum</p>
                                        <span>React and Wordpress Web App (Front-End Challenge)</span>
                                        <a href="https://github.com/Krsnananda/aurum" target="_blank" rel="noopener noreferrer">
                                            <button className="links"> Github </button>
                                        </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
           </div>
        );
    }
}
