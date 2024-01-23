import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './header.css';
import Contact from '../Contact';
import Home from '../Home';
import Product from '../Product';

const Header = () => {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/">
                    <img src="/icons/logo.png" alt="Logo" className="logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/support">Support</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/support" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default Header;

