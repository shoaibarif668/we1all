import React from "react"
import ProfileNotification from "./ProfileNotification"
import ProfileBasicInformation from "./ProfileBasicInformation"
import ProfileMenu from "./ProfileMenu"
import {Row,Col} from "react-bootstrap"
const EditProfileLanding = () =>{
    return(
        <>
        <div id="page-contents">
          <Row>
            <Col md={3}>
              
              {/* <!--Edit Profile Menu--> */}
              <ProfileMenu/>
            </Col>
            <Col md={7}>

              {/* <!-- Basic Information
              ================================================= --> */}
                <ProfileBasicInformation/>
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
export default EditProfileLanding;