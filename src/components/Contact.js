import React from 'react';
import Menu from '../components/menu/Menu';
import './Contact.scss';
import github from '../assets/github-brands.svg';
import linkedin from '../assets/linkedin-in-brands.svg';
import whatsapp from '../assets/whatsapp-brands.svg';
import stack from '../assets/stack-overflow-brands.svg';
import twitter from '../assets/twitter-brands.svg';
import email from '../assets/envelope-solid.svg';

export default class Contact extends React.Component {
    render(){
        return(
        <div>   
            <Menu />
            <div class="flex-center-icons">
            <div>
                <a href="https://github.com/Krsnananda" target="_blank" rel="noopener noreferrer">
                <div class='bttn out cyan'>
                    <div>
                        <img src={github} className="icons bttn out cyan" alt="github"/>
                    </div>
                    <div class='corners top'></div>
                    <div class='corners bottom'></div>
                </div>
                </a>

                <a href="https://www.linkedin.com/in/krsnananda-nunes/" target="_blank" rel="noopener noreferrer">
                    <div class='bttn out cyan'>
                        <div>
                            <img src={linkedin} className="icons bttn out cyan" alt="linkedin" />
                        </div>
                        <div class='corners top'></div>
                        <div class='corners bottom'></div>
                    </div>
                </a>

                <a href="https://stackoverflow.com/users/11869599/krsnananda-nunes" target="_blank" rel="noopener noreferrer">
                    <div class='bttn out cyan'>
                        <div>
                            <img src={stack} className="icons bttn out cyan" alt="stackoverflow"/>
                        </div>
                        <div class='corners top'></div>
                        <div class='corners bottom'></div>
                    </div>
                </a>

                <a href="https://api.whatsapp.com/send?phone=5551989162438&text=Ol%C3%A1%2C%20este%20%C3%A9%20o%20meu%20n%C3%BAmero%20ent%C3%A3o%20fique%20a%20vontade%20para%20entrar%20em%20contato%20comigo%20%3A)" target="_blank" rel="noopener noreferrer">
                    <div class='bttn out cyan'>
                        <div>
                            <img src={whatsapp} className="icons bttn out cyan" alt="whatsapp"/>
                        </div>
                        <div class='corners top'></div>
                        <div class='corners bottom'></div>
                    </div>
                </a>
                <a href="https://twitter.com/Krsnananda1" target="_blank" rel="noopener noreferrer">
                    <div class='bttn out cyan'>
                        <div>
                            <img src={twitter} className="icons bttn out cyan" alt="twitter"/>
                        </div>
                        <div class='corners top'></div>
                        <div class='corners bottom'></div>
                    </div>
                </a>
                <a href="mailto:krsnananda@outlook.com" target="_blank" rel="noopener noreferrer">
                    <div class='bttn out cyan'>
                        <div>
                            <img src={email} className="icons bttn out cyan" alt="email"/>
                        </div>
                        <div class='corners top'></div>
                        <div class='corners bottom'></div>
                    </div>
                </a>
            </div>
        </div>
        </div>
        )
    }
}

