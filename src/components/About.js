import React from 'react';
import Menu from '../components/menu/Navbar';
import profile from '../images/profile2.jpg';
import './About.scss';

export default class About extends React.Component {
    state = {
        navbarOpen: false
      }
    
      handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
      }
    render() {
        return(
            <div>
                <Menu 
                navbarState={this.state.navbarOpen} 
                handleNavbar={this.handleNavbar}
                />
                <div className="flex">
                    <div id="about">
                        About me
                    </div>
                    <div className="img-profile">
                        <img src={profile} alt="profile" />
                    </div>
                    <div className="bio-text">
                        Hi, my name is Krsnananda and I am a brazilian Front-End developer passionate about UX/UI design
                        and create beautiful and functional Web Apps and sites.
                        I have a diverse set of skills, ranging from design, to Html+CSS+Javascript, React, Bootstrap,
                        Styled Components, all the way to PHP and custom Wordpress development.  
                    </div>
                </div>
            </div>
        )
    }
}