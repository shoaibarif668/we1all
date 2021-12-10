import React from "react"
import {NavLink} from "react-router-dom"
import placeholder from "../../images/profileImg.png"

const DashboardTop = () =>{
    return(
        <>
        <div className="dashboard__top__wrapper">
            <div className="dashboard__top__image" style={{backgroundImage:`url(${placeholder})`}}></div>
            <h1>Dashboard</h1>
            <NavLink to="/wetube">Wetube</NavLink>
            <NavLink to="/newsfeed">Community</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/pictures">Pictures</NavLink>
        </div>
        </>
    )
}
export default DashboardTop;