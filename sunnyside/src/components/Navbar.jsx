import React, { useState } from "react"
import '../Navbar.scss'
import logo from './../images/logo.svg';
import burger from './../images/icon-hamburger.svg';

const NavBar = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const toggleOpen = () =>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

        return (<>
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

                    <div className="burger-icon" onClick={toggleOpen}>
                        <img src={burger} alt="Logo sunnyside"/>
                    </div>

                    
                
                </nav>

                <a href='/nowhere' className="nav-link-contact">
                    <div className=""  >
                        <p> CONTACT </p>
                    </div>
                </a>

            </div>

            <div div className= {isOpen ? "dropdown-menu--active" : "dropdown-menu--inactive"}>

                        <a href='/nowhere' className="nav-link-btn">
                            <p> About </p>
                        </a>

                        <a href='/nowhere' className="nav-link-btn">
                            <p> Services </p>
                        </a>

                        <a href='/nowhere' className="nav-link-btn">
                            <p> Projects</p>
                        </a>

                        <a href='/nowhere' className="contact-burger">
                            <p> CONTACT </p>
                        </a>

            </div>
        </>
        )
}

export default NavBar