import React from "react"
import { NavLink } from "react-router-dom";

const NewsFeedNav = () =>{
    return(
        <>
        <ul class="nav-news-feed">
              <li><i class="icon ion-ios-paper"></i><div><NavLink to="/newsfeed">My Newsfeed</NavLink></div></li>
              <li><i class="icon ion-ios-people"></i><div><NavLink to="/newsfeed-people-nearby">People Nearby</NavLink></div></li>
              <li><i class="icon ion-ios-people-outline"></i><div><NavLink to="/newsfeed-friends">Friends</NavLink></div></li>
              <li><i class="icon ion-chatboxes"></i><div><NavLink to="/newsfeed-messages">Messages</NavLink></div></li>
              <li><i class="icon ion-images"></i><div><NavLink to="/newsfeed-images">Images</NavLink></div></li>
              <li><i class="icon ion-ios-videocam"></i><div><NavLink to="/newsfeed-videos">Videos</NavLink></div></li>
        </ul>
        </>
    )
}
export default NewsFeedNav;