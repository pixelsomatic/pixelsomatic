import React from 'react';
import './Menu.scss';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {

    render() {
        return (
            <nav>
                <ul class="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}