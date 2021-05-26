import React from "react"
import { Container } from "react-bootstrap"
// import Logo from "../../images/logo.png"
// import {NavLink} from "react-router-dom"

const HomeBanner = () =>{
    return(
        <>
        <section id="banner">
			<Container>

        {/* <div className="sign-up-form">
					<a href="index.html" className="logo"><img src={Logo} alt="Friend Finder"/></a>
					<h2 className="text-white">Find My Friends</h2>
					<div className="line-divider"></div>
					<div className="form-wrapper">
						<p className="signup-text">Signup now and meet awesome people around the world</p>
						<form action="#">
							<fieldset className="form-group">
								<input type="text" className="form-control" id="example-name" placeholder="Enter name"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="email" className="form-control" id="example-email" placeholder="Enter email"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="password" className="form-control" id="example-password" placeholder="Enter a password"/>
							</fieldset>	
						</form>
						<p>By signning up you agree to the terms</p>
						<button className="btn-secondary">Signup</button>
					</div>
					<NavLink to="">Already have an account?</NavLink>
					<img className="form-shadow" src="images/bottom-shadow.png" alt="" />
				</div> */}
        <svg className="arrows hidden-xs hidden-sm">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
			</Container>
		</section>
        </>
    )
}
export default HomeBanner