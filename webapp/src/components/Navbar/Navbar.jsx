import React from 'react';
import { Link } from 'react-router-dom'

import "./Navbar.css"

function Navbar() {
    return (
        <nav className='navbar_container'>
            <div className='navbar_items'>
                <div className='navbar_item'>
                    <Link to="/projects">Projects</Link>
                </div>
                <div className='navbar_item'>
                    <Link to="/about">About</Link>
                </div>
                <div className='navbar_item'>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='navbar_aux'>

            </div>
        </nav>
    )
}

export default Navbar