import React from 'react';
import { Link } from 'gatsby';
import './Header.css'
import '../pages/index.css'
import './Fonts.css'

function Header() {
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo"><Link to="/page-2/">THE FRESH KID</Link></div>
                    <div className="navMenu-items" >
                    <div className="home"><Link to="/page-2/">HOME</Link></div>  
                    <div className="about"><Link to="/page-2/">ABOUT US</Link></div>  
                    <div className="reports"><Link to="/page-2/">REPORTS</Link></div>  
                    <div className="blogs"><Link to="/page-2/">BLOGS</Link></div>   
                    </div>         
                </div>
            </nav>
        </div>
    )
}

export default Header;
