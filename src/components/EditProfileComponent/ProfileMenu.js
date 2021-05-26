import React from "react";
import { NavLink } from "react-router-dom";
const ProfileMenu = () => {
  return (
    <>
      <ul class="edit-menu">
        <li class="active">
          <i class="icon ion-ios-information-outline"></i>
          <NavLink to="/edit-profile">Basic Information</NavLink>
        </li>
        <li>
          <i class="icon ion-ios-briefcase-outline"></i>
          <NavLink to="/edit-profile-work">Education and Work</NavLink>
        </li>
        <li>
          <i class="icon ion-ios-heart-outline"></i>
          <NavLink to="/edit-profile-interests">My Interests</NavLink>
        </li>
        <li>
          <i class="icon ion-ios-settings"></i>
          <NavLink to="/edit-profile-settings">Account Settings</NavLink>
        </li>
        <li>
          <i class="icon ion-ios-locked-outline"></i>
          <NavLink to="/edit-profile-password">Change Password</NavLink>
        </li>
      </ul>
    </>
  );
};
export default ProfileMenu;
