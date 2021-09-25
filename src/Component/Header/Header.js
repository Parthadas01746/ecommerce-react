import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
         <div className="header-photo">
             <img src={logo} alt="" />
             </div>
             <div className="navbar">
                 <ul>
                 <a href="#">Shop</a>
                 <a href="#">Order review</a>
                 <a href="#">Manage Inventory here</a>
                 </ul>
                 </div>   
        </div>
    );
};

export default Header;