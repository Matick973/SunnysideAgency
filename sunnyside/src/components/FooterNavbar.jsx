import React from "react"
import '../Navbar.scss'
import logo from './../images/logo.svg';
import facebook from './../images/icon-facebook.svg'
import insta from './../images/icon-instagram.svg'
import twitter from './../images/icon-twitter.svg'
import pinterest from './../images/icon-pinterest.svg'

const FooterNavBar = () => {

        return (
            <nav className="footer-navbar">
                
                <div className="logo-container">
                    <a href='/nowhere' className="nav-link">
                    <div className="footer-logo" >
                        <img src={logo} alt="Logo sunnyside"/>
                    </div>
                    </a>
                </div>

                <div className="nav-items">
            
                    <a href='/nowhere' className="nav-link-btn footer-nav-color">
                        <div className="" >
                            <p> About </p>
                        </div>
                    </a>

                    <a href='/nowhere' className="nav-link-btn footer-nav-color">
                        <div className=""  >
                            <p> Services </p>
                        </div>
                    </a>

                    <a href='/nowhere' className="nav-link-btn footer-nav-color">
                        <div className="" >
                            <p> Projects</p>
                        </div>
                    </a>

                </div>

                <div className="social-icons">
                <a href='/nowhere' className=""><img src={facebook} alt="Logo facebook"/></a>
                <a href='/nowhere' className=""><img src={insta} alt="Logo insta"/></a>
                <a href='/nowhere' className=""><img src={twitter} alt="Logo twitter"/></a>
                <a href='/nowhere' className=""><img src={pinterest} alt="Logo pinterest"/></a>
                </div>
            
            </nav>
        )
}

export default FooterNavBar