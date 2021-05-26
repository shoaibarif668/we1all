import React from "react"
import ProfileNotification from "../EditProfileComponent/ProfileNotification"
import {Row,Col} from "react-bootstrap"

import ProfileFriends from "./ProfileFriends"
const TimelineFriendsLanding = () =>{
    return(
        <>
        <div id="page-contents">
          <Row>
            <Col md={3}>
            </Col>
            <Col md={7}>
                {/* <!-- Friend List
              ================================================= --> */}
                <ProfileFriends/>
            </Col>
            <Col md={2} className="static">
              
              {/* <!--Sticky Timeline Activity Sidebar--> */}
              <ProfileNotification/>
            </Col>
          </Row>
        </div>
        </>
    )
}
export default TimelineFriendsLanding;