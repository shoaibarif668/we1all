import React from "react"
import {NavLink} from "react-router-dom"
import placeholder from "../../images/profileImg.png"

const WetubeTop = () =>{
    return(
        <>
        <div className="dashboard__top__wrapper">
            <div className="dashboard__top__profile">
                <div className="dashboard__top__image" style={{backgroundImage:`url(${placeholder})`}}></div>
                <h1>Wetube</h1>
            </div>
            <div className="dashboard__top__menu">
                <NavLink activeClassName="wetube__top__menu__navlink" to="/wetube">Home</NavLink>
                <NavLink activeClassName="wetube__top__menu__navlink" to="/trending">Trending</NavLink>
                <NavLink activeClassName="wetube__top__menu__navlink" to="/dashboard">My Channel</NavLink>
            </div>
        </div>
        </>
    )
}
export default WetubeTop;