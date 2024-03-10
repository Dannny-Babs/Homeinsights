import siteLogo from './assets/logomark.svg'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import "./navbar.scss";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => setMenuOpen(!isOpen);

    return (
        <div className="Navbar">
            <nav className="nav-container">
                <Link to="/" className="nav-logo">
                    <img src={siteLogo} alt="Logo" />
                </Link>
                
                <div className={`nav-menu ${menuOpen ? "Open" : ""}`}id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/insight" className="nav-link">Insight</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                   
                </div>
                                  
              
            </nav>
        </div>

    );
}

export default Navbar