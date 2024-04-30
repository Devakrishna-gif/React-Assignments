import React from 'react';
import ReactDOM from 'react-dom/client';
import flipkartlogo from './images/flipkart-logo.svg';
import profileicon from './images/profile-icon.svg';
import './App.css'

const Header = () => {
    return (
        <div className='container'>
            <img src={flipkartlogo} />
            <input className='searchBar' type='search' placeholder='Search for Products, Brands and More' />
            <div className="profileContianer">
            <img className="profileIcon" src={profileicon} />
            <p className="profileText">Cart</p>
            </div>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />)