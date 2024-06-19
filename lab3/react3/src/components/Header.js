
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from  '../Assets/logo.svg';

const Header = () => {
    return (
        <nav className="header-navigation">
            <img src= {logo}className="logo"  alt="Tranquil Travels Logo" />
            <ul className="nav-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/#findoffers">Find offers</Link></li>
                <li><Link className="nav-link" to="/#add">Add new offers</Link></li>
                <li><Link className="nav-link" to="/#myoffers">My offers</Link></li>
                <li><Link className="nav-link" to="/#favorites">Favorites</Link></li>
                <button className="button primary">Log out</button>
            </ul>
            <button className="button hidButtn hidden">Menu</button>
        </nav>
    );
};

export default Header;
