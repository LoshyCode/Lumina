import React, { useState } from "react";
import './style.css' 
import { FaUser } from "react-icons/fa";


function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className="navbar-main-container">
            <div>
                <a href=""><img src="../../../public/logo.png" alt="" className="logo"/></a>
            </div>
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`links ${showMobileMenu ? 'active' : ''}`}>
                <ul>
                    <a href=""><li>Inicio</li></a>
                    <a href=""><li>Sobre nós</li></a>
                    <a href=""><li>Recursos</li></a>
                    <a href=""><li>Objetivos</li></a>
                    <a href=""><li>Contato</li></a>
                    <a href=""><li><FaUser className="user-icon"/></li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;