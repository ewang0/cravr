import React from "react";
import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav-items left">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <h1>Cravr</h1>
            <div className="nav-items right">
                <NavLink to="/">Favorites</NavLink>
                <NavLink to="/">Something</NavLink>
            </div>
        </nav>
    )
}

export default Nav;