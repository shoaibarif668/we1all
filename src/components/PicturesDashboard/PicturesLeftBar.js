import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import {MdFeedback} from "react-icons/md"
import {FaTruckMoving} from "react-icons/fa"
import {AiTwotoneSetting,AiFillStar} from "react-icons/ai"

import placeholder from "../../images/profileImg.png"

const PicturesLeftBar = () =>{
    return(
        <>
        <div className="pictures__left__sidebar__wrapper">
            <Nav className="d-md-block sidebar">
                <div className="sidebar-sticky"></div>
                <div className="pictures__left__sidebar__profile">
                    <div className="dashboard__top__image" style={{backgroundImage:`url(${placeholder})`}}></div>
                    <h1>Pictures</h1>
                </div>
                <div className="pictures__left__sidebar__actions">
                    <div className="action__menu">
                        <NavLink to="/pictures"><span><MdFeedback/></span> Feed</NavLink>
                        <NavLink to="/pictures"><span><FaTruckMoving/></span>  Explore</NavLink>
                        <NavLink to="/pictures"><span><AiFillStar/></span>  My Favorites</NavLink>
                        <NavLink to="/pictures"><span><AiTwotoneSetting/></span>  Settings</NavLink>
                    </div>
                </div>
            </Nav>
        </div>
        </>
    )
}
const Sidebar = withRouter(PicturesLeftBar);
export default Sidebar;