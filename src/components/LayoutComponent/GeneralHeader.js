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
                <li className="dropdown">
                  <NavLink
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Newsfeed{" "}
                    <span>
                      <img src="images/down-arrow.png" alt="" />
                    </span>
                  </NavLink>
                  <ul className="dropdown-menu newsfeed-home">
                    <li>
                      <NavLink to="/newsfeed">Newsfeed</NavLink>
                    </li>
                    <li>
                      <NavLink to="/newsfeed-people-nearby">
                        People You May Know
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/newsfeed-friends">My friends</NavLink>
                    </li>
                    <li>
                      <NavLink to="/newsfeed-messages">Chatroom</NavLink>
                    </li>
                    <li>
                      <NavLink to="/newsfeed-images">Images</NavLink>
                    </li>
                    <li>
                      <NavLink to="/newsfeed-videos">Videos</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <NavLink
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Timeline{" "}
                    <span>
                      <img src="images/down-arrow.png" alt="" />
                    </span>
                  </NavLink>
                  <ul className="dropdown-menu login">
                    <li>
                      <NavLink to="/timeline">Timeline</NavLink>
                    </li>
                    <li>
                      <NavLink to="/timeline-about">Timeline About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/timeline-album">Timeline Album</NavLink>
                    </li>
                    <li>
                      <NavLink to="/timeline-friends">Timeline Friends</NavLink>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <NavLink
                    to="#"
                    className="dropdown-toggle pages"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit Profile{" "}
                    <span>
                      <img src="images/down-arrow.png" alt="" />
                    </span>
                  </NavLink>
                  <ul className="dropdown-menu page-list">
                    <li>
                      <NavLink to="/edit-profile">Edit: Basic Info</NavLink>
                    </li>
                    <li>
                      <NavLink to="/edit-profile-work">Edit: Work</NavLink>
                    </li>
                    <li>
                      <NavLink to="/edit-profile-interests">
                        Edit: Interests
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/edit-profile-settings">
                        Account Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/edit-profile-password">
                        Change Password
                      </NavLink>
                    </li>
                  </ul>
                </li>
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
              <form className="navbar-form navbar-right hidden-sm">
                <div className="form-group">
                  <i className="icon ion-android-search"></i>
                  <input type="text" className="form-control" />
                </div>
              </form>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
};
export default UserHeader;
