import React from "react"
import '../Navbar.scss'
import logo from './../images/logo.svg';

const NavBar = () => {

        return (
            <div className="header-items">
                <nav className="navbar">
                    
                    <div className="logo-container">
                        <a href='/nowhere' className="nav-link">
                        <div className="logo" >
                            <img src={logo} alt="Logo sunnyside"/>
                        </div>
                        </a>
                    </div>

                    <div className="nav-items">
                
                        <a href='/nowhere' className="nav-link-btn">
                            <div className="" >
                                <p> About </p>
                            </div>
                        </a>

                        <a href='/nowhere' className="nav-link-btn">
                            <div className=""  >
                                <p> Services </p>
                            </div>
                        </a>

                        <a href='/nowhere' className="nav-link-btn">
                            <div className="" >
                                <p> Projects</p>
                            </div>
                        </a>

                    </div>
                
                </nav>

            <a href='/nowhere' className="nav-link-contact">
                <div className=""  >
                    <p> CONTACT </p>
                </div>
            </a>
            </div>
        )
}

export default NavBar