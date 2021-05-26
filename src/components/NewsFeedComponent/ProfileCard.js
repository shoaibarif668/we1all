import React from "react"
import {NavLink} from "react-router-dom"
import sarah from "../../images/sarah.jpg"
const ProfileCard = () =>{
    return(
        <>
        <div class="profile-card">
            	<img src={sarah} alt="user" class="profile-photo" />
            	<h5><NavLink to="/timeline" class="text-white">Sarah Cruiz</NavLink></h5>
            	<NavLink to="#" class="text-white"><i class="ion ion-android-person-add"></i> 1,299 followers</NavLink>
            </div>
        </>
    )
}
export default ProfileCard;
