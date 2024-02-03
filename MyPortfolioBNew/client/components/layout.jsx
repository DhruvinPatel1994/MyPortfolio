// Layout.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/logo.jpeg';
import '../src/layout.css'; // Assuming you have a CSS file for styling

export default function Layout() {
    return (
        <div className="nav-header">
            <div className="nav-logo"><img src={football1} alt="football" className="football" /></div>
            <div className="navigation">
                <Link to="/" className="navLink">Home</Link> |
                 <Link to="/about" className="navLink">About</Link> |
                 <Link to="/education" className="navLink">Services</Link> |
                 <Link to="/project" className="navLink">Projects</Link> |
                 <Link to="/contact" className="navLink">Contact</Link>
            </div>
        </div>
        // <div className="layoutContainer">
        //     <img src={football1} alt="football" className="football" />
           

        //     <nav className="navigation">
        //         <Link to="/" className="navLink">Home</Link> |
        //         <Link to="/about" className="navLink">About</Link> |
        //         <Link to="/education" className="navLink">Education</Link> |
        //         <Link to="/project" className="navLink">Projects</Link> |
        //         <Link to="/contact" className="navLink">Contact</Link>
        //     </nav>

        //     {/* <hr className="separator" /> */}
        // </div>
    );
}
