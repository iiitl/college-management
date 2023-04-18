import React from "react";
import Styles from '../footer/Footer.scss'
import fb from '../../../asset/svg/facebook.svg'
import insta from '../../../asset/svg/instagram.svg'
import twitter from '../../../asset/svg/twitter.svg'
import linkedin from '../../../asset/svg/linkedin.svg'
const Footer = () =>{
    return (
        <div className="foot">
            <footer class="footer">
                <div class="foot-con">
                    <div class="row">
                        <div class="footer-col">
                            <h4>IIIT Lucknow</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Follow Us</h4>
                            <div class="social-links">
                                <a href="#"><img src={fb} alt="..." /></a>
                                <a href="#"><img src={insta} alt="..." /></a>
                                <a href="#"><img src={twitter} alt="..." /></a>
                                <a href="#"><img src={linkedin} alt="..." /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer