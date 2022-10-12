import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3 className="title">Spare Time</h3>
            <ul className ="nav-links">
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/login">
                <li>Login</li>
                </Link>
                <Link to="/events">
                <li>Events</li>
                </Link>
            </ul>
        </nav>

    );
};


export default Nav;