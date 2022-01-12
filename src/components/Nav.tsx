import React from "react";
import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => {
    return (
        <nav>
            <div className="nav-items left">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <h1>Cravr</h1>
            <div className="nav-items right">
                <a href="https://github.com/ewang0/stretch-tech" target="_blank" rel="noreferrer">Repo</a>
                <a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer">API</a>
            </div>
        </nav>
    )
}

export default Nav;