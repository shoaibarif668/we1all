import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";

import {BiMessageDetail} from "react-icons/bi"

import placeholder from "../../images/profileImg.png"

const PicturesRightBar = () =>{
    return(
        <>
        <div className="pictures__right__sidebar__wrapper">
            <Nav className="d-md-block sidebar">
                <div className="sidebar-sticky"></div>
                <div className="pictures__right__sidebar__trending">
                    <h1>Top Trends</h1>
                    <ul>
                        <li>#TopTrends</li>
                        <li>#We1All</li>
                        <li>#Community</li>
                        <li>#CryptoEra</li>
                        <li>#holdhands</li>
                    </ul>
                </div>
                <div className="pictures__right__sidebar__suggestions">
                    <h1>Suggestions</h1>
                    <div className="pictures__suggestions__list">
                        <div className="friend__suggestions__wrapper">
                            <div className="friend__profile__wrapper">
                                <div className="friend__profile" style={{backgroundImage:`url(${placeholder})`}}></div>
                                <h3>Developer#01</h3>
                            </div>
                            <div className="friend__message">
                                <span><BiMessageDetail/></span>
                            </div>
                        </div>
                        <div className="friend__suggestions__wrapper">
                            <div className="friend__profile__wrapper">
                                <div className="friend__profile" style={{backgroundImage:`url(${placeholder})`}}></div>
                                <h3>Developer#02</h3>
                            </div>
                            <div className="friend__message">
                                <span><BiMessageDetail/></span>
                            </div>
                        </div>
                        <div className="friend__suggestions__wrapper">
                            <div className="friend__profile__wrapper">
                                <div className="friend__profile" style={{backgroundImage:`url(${placeholder})`}}></div>
                                <h3>Developer#03</h3>
                            </div>
                            <div className="friend__message">
                                <span><BiMessageDetail/></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Nav>
        </div>
        </>
    )
}
const Sidebar = withRouter(PicturesRightBar);
export default Sidebar;