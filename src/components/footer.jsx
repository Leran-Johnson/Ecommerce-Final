import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="social-media-links">
                    <a href="https://www.facebook.com/"><img className="sIcons" src={process.env.PUBLIC_URL + '/icons/fb.png'} alt="facebook" /><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/"><img className="sIcons" src={process.env.PUBLIC_URL + '/icons/twit.png'} alt="twitter" /><i className="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><img className="sIcons" src={process.env.PUBLIC_URL + '/icons/ig.png'} alt="instagram" /><i className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/"><img className="sIcons" src={process.env.PUBLIC_URL + '/icons/li.png'} alt="linkedin" /><i className="fa fa-linkedin"></i></a>
                </div>
                <div className="business-hours">
                    <p>Business Hours: Monday-Friday 9am-6pm</p>
                </div>
                <p>&copy; 2023, Funko Fiesta, All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
