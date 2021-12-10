import React from "react"
import { NavLink } from "react-router-dom";
import placeholder from "../../images/profileImg.png"
const BlogsTop = () =>{
    return(
        <>
        <div className="dashboard__top__wrapper">
            <div className="dashboard__top__profile">
                <div className="dashboard__top__image" style={{backgroundImage:`url(${placeholder})`}}></div>
                <h1>Blogs</h1>
            </div>
            <div className="dashboard__top__menu">
                <p>Create Your blogs and Share your Voice</p>
                <NavLink activeClassName="blogs__top__menu__button" to="/blogs">Start A Blog</NavLink>
            </div>
        </div>
        </>
    )
}
export default BlogsTop;