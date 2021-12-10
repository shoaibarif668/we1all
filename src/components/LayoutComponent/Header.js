import React, { useEffect,useState } from "react"
import {Container} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo_white.png"
const Header = () =>{
   const [isScrolling,setIsScrolling] = useState()


    useEffect(() => {
      if (typeof window !== "undefined") {
        window.onscroll = () => {
          let currentScrollPos = window.pageYOffset;
          let maxScroll = document.body.scrollHeight - window.innerHeight;
          if (currentScrollPos > 200 && currentScrollPos < maxScroll) {
            setIsScrolling('visible')
          } else {
            setIsScrolling('')
          }
        }
      }
    })
    return(
        <>
       
    {/* <div id="spinner-wrapper">
      <div className="spinner"></div>
    </div> */}

   
    <header id="header" className={`lazy-load ${isScrolling}`}>
      
    <nav className="navbar navbar-default navbar-fixed-top menu">
        <Container className="dBlock">

          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/register"><img src={Logo} alt="logo" /></NavLink>
          </div>

         
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right main-menu">
              <li className="dropdown">
                <NavLink to="/">Home</NavLink>
              </li>
             
             
              
              <li className="dropdown"><NavLink to="/faq">FAQ</NavLink></li>
              <li className="dropdown"><NavLink to="/contact">Contact Us</NavLink></li>
              <li className="dropdown"><NavLink to="/register">Join Us</NavLink></li>
            </ul>
            <form className="navbar-form navbar-right hidden-sm">
              <div className="form-group">
                <i className="icon ion-android-search"></i>
                <input type="text" className="form-control"/>
              </div>
            </form>
          </div>
        </Container>
      </nav>
    </header>
   
    
        </>
    )
}
export default Header;