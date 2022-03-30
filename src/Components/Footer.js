import React from 'react'
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className = "footer-container">
            <section className ="footer-subscription">
                <p className ="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className ="footer-subscription-text">
                    You can unsubscribe at anytime.
                </p>
                <div classNmae="input-areas">
                    <form>
                        <input tyep="email" name ="email" placeholder="Your email" className="footer-input"/>
                        <Button buttonStyle ='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="./sign-up">How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="./sign-up">Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Sponsorships</Link>
                        
                    </div>
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="./sign-up">Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                        
                    </div>
                    
                </div>
                
                
            </div>
            <section className ="social-media">
                <div className ="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            ANADi <i className="fab fa-plane-departure"></i>
                        </Link>
                    </div>
                    <small className ="website-rights">ANADi &copy; 2021</small>
                    <div className ="social-icons">
                        <Link className ="social-icon-link instagram"
                        to="https://www.instagram.com/___anadi_/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                        <i className='fab fa-instagram' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
