import React from "react"
import ProfileNotification from "./ProfileNotification"
import ProfileMenu from "./ProfileMenu"
import {Row,Col} from "react-bootstrap"
import ProfileWork from "./ProfileWork"
const EditProfileWorkLanding = () =>{
    return(
        <>
        <div id="page-contents">
          <Row>
            <Col md={3}>
              
              {/* <!--Edit Profile Menu--> */}
              <ProfileMenu/>
            </Col>
            <Col md={7}>

              {/*   <!-- Edit Work and Education
              ================================================= --> */}
                <ProfileWork/>
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
export default EditProfileWorkLanding;