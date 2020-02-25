import React from 'react';
import Menu from '../components/menu/Navbar';
import './Skills.scss';
import react from '../assets/icons8-react-100.png';
import javascript from '../assets/icons8-javascript-100.png';
import bootstrap from '../assets/icons8-bootstrap-100.png';
import mongo from '../assets/icons8-mongodb.svg';
import node from '../assets/icons8-nodejs.svg';
import sass from '../assets/icons8-sass-100.png';
import logophp from '../assets/icons8-logo-php-100.png';
import mysql from '../assets/icons8-banco-de-dados-100.png';
import npm from '../assets/icons8-npm-100.png';
import git from '../assets/icons8-git-100.png';
import terminal from '../assets/icons8-terminal-100.png';
export default class Skills extends React.Component {
    state = {
        navbarOpen: false
      }
    
      handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
      }

    render(){
        return(
            <div>
                <Menu 
                navbarState={this.state.navbarOpen} 
                handleNavbar={this.handleNavbar}
                />
                <div class="flex-center-label">
                    <label className="react">React</label>
                    <label className="js">Javascript</label>
                    <label className="html5">Node.js</label>
                    <label className="css">MongoDB</label>
                    <label className="bts">Bootstrap</label>
                    <label className="sass">Sass</label>
                    <label className="php">PHP</label>
                    <label className="sql">mySQL</label>
                    <label className="npm">Npm</label>
                    <label className="git">Git</label>
                    <label className="terminal">Linux</label>
                </div>
                <div class="flex-center">
                    <img src={react} className="skills-icon" alt="react" />
                    <img src={javascript} className="skills-icon" alt="javascript" />
                    <img src={node} className="skills-icon" alt="html5" />
                    <img src={mongo} className="skills-icon" alt="css3" />
                    <img src={bootstrap} className="skills-icon" alt="bootstrap" />
                    <img src={sass} className="skills-icon" alt="sass" />
                    <img src={logophp} className="skills-icon" alt="logophp" />
                    <img src={mysql} className="skills-icon" alt="mysql" />
                    <img src={npm} className="skills-icon" alt="npm" />
                    <img src={git} className="skills-icon" alt="git" />
                    <img src={terminal} className="skills-icon" alt="terminal" />
                </div>
            </div>
        )
    }
}