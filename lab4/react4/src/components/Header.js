import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddHotelModal from './AddHotelModal'; 
import './Header.css';
import logo from '../Assets/logo.svg';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import firebaseApp from '../firebase-config';

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("User logged in: ", user);
    } catch (error) {
        console.error("Error signing in with Google:", error);
        alert("Error signing in: " + error.message);
    }
};

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <nav className="header-navigation">
            <img src={logo} className="logo" alt="Tranquil Travels Logo" />
            <ul className="nav-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/#findoffers">Find offers</Link></li>
                <li>
                    <button className="button-link" onClick={() => setModalOpen(true)}>Add New Offer</button>
                    <AddHotelModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSave={(newHotel) => console.log(newHotel)} />
                </li>
                <li><Link className="nav-link" to="/#myoffers">My offers</Link></li>
                <li><Link className="nav-link" to="/#favorites">Favorites</Link></li>
                <button onClick={signInWithGoogle} className="button primary">Sign in with Google</button>
                <button className="button primary">Log out</button>
            </ul>
            <button className="button hidButtn hidden">Menu</button>
        </nav>
    );
};

export default Header;
