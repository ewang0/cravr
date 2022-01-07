import React from "react";
import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => {
    return (
        <nav>
            <h1>Cravr</h1>
            <div className="nav-items">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}

export default Nav;