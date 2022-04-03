import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Welcome to TechShop!</h2>
          <nav>
        <Link to="/">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
          </nav>
        </div>
    );
};

export default Header;