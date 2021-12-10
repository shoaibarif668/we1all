import React from "react";
import { Container } from "react-bootstrap";
import { NavLink,useHistory} from "react-router-dom";
import Logo from "../../images/logo_white.png";
import {toast} from "react-toastify"
const UserHeader = () => {
  let history = useHistory()
  const logout = () =>{
    localStorage.clear()
    toast.success("Successfully Logged Out")
    history.push("/register")
  }
  return (
    <>
      <header id="header">
        <nav className="navbar navbar-default navbar-fixed-top menu">
          <Container className="dBlock">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavLink className="navbar-brand" to="#">
                <img src={Logo} alt="logo" />
              </NavLink>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right main-menu">
                
                <li className="dropdown logout__dropdown">
                <NavLink
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="dropdown logout__dropdown">
                  <button onClick={() => logout()}>Logout</button>
                </li>
                
              </ul>

            </div>
          </Container>
        </nav>
      </header>
    </>
  );
};
export default UserHeader;
