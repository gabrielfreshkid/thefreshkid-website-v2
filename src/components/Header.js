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
                    <div className="logo">
                        <Link to="/page-2/">THE FRESH KID</Link>
                    </div>
                    <div className="navMenu-items" >
                        <div className="navItem"><Link to="/page-2/">HOME</Link></div>  
                        <div className="navItem"><Link to="/page-2/">ABOUT US</Link></div>  
                        <div className="navItem"><Link to="/page-2/">REPORTS</Link></div>  
                        <div className="navItem"><Link to="/page-2/">BLOGS</Link></div>   
                    </div>
                    <div className="burger">
                        <div className="line1"></div>    
                        <div className="line2"></div>    
                        <div className="line3"></div>    
                    </div>         
                </div>
            </nav>
        </div>
    )
}

// const navSlide = () => {

//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.navMenu-items');
//     const navItems = document.querySelector('.navItem')
//     if (burger) {
//         burger.addEventListener('click', ()=> {
//             nav.classList.toggle('nav-active');
//             navItems.classList.toggle('navItem-active');
//             console.log("HELP ME PLS");
//         })
//     }
// }

export default Header;
// navSlide();
