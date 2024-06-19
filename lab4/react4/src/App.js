import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelList from './components/HotelList';
import HotelDetail from './components/HotelDetail';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { auth } from './firebase-config';


const App = () => {


    
    return (
        <Router>
            <div className="App">
                <Header />
                <Hero />
                <Routes>
                    <Route path="/" element={<HotelList />} />
                    <Route path="/hotel/:id" element={<HotelDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
