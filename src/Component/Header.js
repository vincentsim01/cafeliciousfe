import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header className=''>
            {/* <div id="brand">
                Cafelicious
            </div> */}
            <span id="menu">
            <Link to="/" className="menumenu">Home</Link>
            <Link to="/about" className="menumenu">About Us</Link>
            <Link to="/contact" className="menumenu">Contact Us</Link>
            </span>
            <div id="social">
                <a href="#">
                    <img src="https://i.ibb.co/bsXv4bf/facebook.png" alt="fb" className="socialLogo"/>
                </a>
                <a href="#">
                    <img src="https://i.ibb.co/8c9LJP1/insta.png" alt="insta" className="socialLogo"/>
                </a>
                <a href="#">
                    <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="yt" className="socialLogo"/>
                </a>
            </div>
        </header>
    )
}

export default Header;
