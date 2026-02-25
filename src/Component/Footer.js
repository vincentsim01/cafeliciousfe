import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <hr/>
            <p className="footText">&copy; Cafelicious 2025</p>
            <hr/>
            <div className="footDiv">
                <ul>
                <Link to={`/about`}><li>About Us</li></Link>
                <Link to={`/contact`}><li>Contact Us</li></Link>
                </ul>
            </div>
            <div className="footDiv">
                <ul>
                <Link to={`/FAQ`}><li>FAQ</li></Link>
                    <li>Rate Us</li>
                </ul>
            </div>
            <div className="footDiv noborder">
                <ul>
                    <li>Subscribe</li>
                    <Link to={`/promotion`}><li>Promotion</li></Link>
                </ul>
            </div>
            <br></br>
            <a href="#">
                <img src="https://i.ibb.co/bsXv4bf/facebook.png" alt="fb" className="socialLogo"/>
            </a>
            <a href="#">
                <img src="https://i.ibb.co/8c9LJP1/insta.png" alt="insta" className="socialLogo"/>
            </a>
            <a href="#">
                <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="yt" className="socialLogo"/>
            </a>
        </footer>
    )
}

export default Footer;
