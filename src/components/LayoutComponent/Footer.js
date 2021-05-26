import React from "react"
import FooterLogo from "../../images/logo-black.png"
import {NavLink} from "react-router-dom"
const Footer = () =>{
    return(
        <>
        {/* <!-- Footer
    ================================================= --> */}
		<footer id="footer">
      <div className="container">
      	<div className="row">
          <div className="footer-wrapper">
            <div className="col-md-3 col-sm-3">
              <NavLink to=""><img src={FooterLogo} alt="Footer Logo" className="footer-logo" /></NavLink>
              <ul className="list-inline social-icons">
              	<li><NavLink to="#"><i className="icon ion-social-facebook"></i></NavLink></li>
              	<li><NavLink to="#"><i className="icon ion-social-twitter"></i></NavLink></li>
              	<li><NavLink to="#"><i className="icon ion-social-googleplus"></i></NavLink></li>
              	<li><NavLink to="#"><i className="icon ion-social-pinterest"></i></NavLink></li>
              	<li><NavLink to="#"><i className="icon ion-social-linkedin"></i></NavLink></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2">
              <h6>For individuals</h6>
              <ul className="footer-links">
                <li><NavLink to="">Signup</NavLink></li>
                <li><NavLink to="">login</NavLink></li>
                <li><NavLink to="">Explore</NavLink></li>
                <li><NavLink to="">Finder app</NavLink></li>
                <li><NavLink to="">Features</NavLink></li>
                <li><NavLink to="">Language settings</NavLink></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2">
              <h6>For businesses</h6>
              <ul className="footer-links">
                <li><NavLink to="">Business signup</NavLink></li>
                <li><NavLink to="">Business login</NavLink></li>
                <li><NavLink to="">Benefits</NavLink></li>
                <li><NavLink to="">Resources</NavLink></li>
                <li><NavLink to="">Advertise</NavLink></li>
                <li><NavLink to="">Setup</NavLink></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2">
              <h6>About</h6>
              <ul className="footer-links">
                <li><NavLink to="">About us</NavLink></li>
                <li><NavLink to="">Contact us</NavLink></li>
                <li><NavLink to="">Privacy Policy</NavLink></li>
                <li><NavLink to="">Terms</NavLink></li>
                <li><NavLink to="">Help</NavLink></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3">
              <h6>Contact Us</h6>
                <ul className="contact">
                	<li><i className="icon ion-ios-telephone-outline"></i>+1 (234) 222 0754</li>
                	<li><i className="icon ion-ios-email-outline"></i>info@thunder-team.com</li>
                  <li><i className="icon ion-ios-location-outline"></i>228 Park Ave S NY, USA</li>
                </ul>
            </div>
          </div>
      	</div>
      </div>
      <div className="copyright">
        <p>copyright @we1all 2021. All rights reserved</p>
      </div>
		</footer>
        </>
    )
}
export default Footer;