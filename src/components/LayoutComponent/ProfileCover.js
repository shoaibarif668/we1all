import React from "react";
import {Row,Col} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import sarah from "../../images/sarah.jpg"
const ProfileCover = () => {
  return (
    <>
      <div class="timeline-cover">
        {/* <!--Timeline Menu for Large Screens--> */}
        <div class="timeline-nav-bar hidden-sm hidden-xs">
          <Row>
            <Col md={3}>
              <div class="profile-info">
                <img
                  src={sarah}
                  alt=""
                  class="img-responsive profile-photo"
                />
                <h3>Sarah Cruiz</h3>
                <p class="text-muted">Creative Director</p>
              </div>
            </Col>
            <Col md={9}>
              <ul class="list-inline profile-menu">
                <li>
                  <NavLink to="/timeline">Timeline</NavLink>
                </li>
                <li>
                  <NavLink to="/timeline-about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/timeline-album">Album</NavLink>
                </li>
                <li>
                  <NavLink to="/timeline-friends">Friends</NavLink>
                </li>
                <li>
                <NavLink to="/edit-profile">Edit Profile</NavLink>
              </li>
              </ul>
              <ul class="follow-me list-inline">
                <li>1,299 people following her</li>
                <li>
                  <button class="btn-primary">Add Friend</button>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        {/* <!--Timeline Menu for Large Screens End--> */}

        {/* <!--Timeline Menu for Small Screens--> */}
        <div class="navbar-mobile hidden-lg hidden-md">
          <div class="profile-info">
            <img
              src={sarah}
              alt=""
              class="img-responsive profile-photo"
            />
            <h4>Sarah Cruiz</h4>
            <p class="text-muted">Creative Director</p>
          </div>
          <div class="mobile-menu">
            <ul class="list-inline">
              <li>
                <NavLink to="/timline">Timeline</NavLink>
              </li>
              <li>
                <NavLink to="/timeline-about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline-album">Album</NavLink>
              </li>
              <li>
                <NavLink to="/timeline-friends">Friends</NavLink>
              </li>
              <li>
                <NavLink to="/edit-profile">Edit Profile</NavLink>
              </li>
            </ul>
            <button class="btn-primary">Add Friend</button>
          </div>
        </div>
        {/* <!--Timeline Menu for Small Screens End--> */}
      </div>
    </>
  );
};
export default ProfileCover;
