import React from "react"
import ProfileNotification from "../EditProfileComponent/ProfileNotification"
import {Row,Col} from "react-bootstrap"
import CreatePost from "./CreatePost"
import PostContent from "./PostContent"
const TimelineLanding = () =>{
    return(
        <>
        <div id="page-contents">
          <Row>
            <Col md={3}>
            </Col>
            <Col md={7}>

              {/*  <!-- Post Create Box
              ================================================= --> */}
                <CreatePost/>
                {/* <!-- Post Content
              ================================================= --> */}
                <PostContent/>
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
export default TimelineLanding;