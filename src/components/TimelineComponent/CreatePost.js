import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import sarah from "../../images/sarah.jpg"
const CreatePost = () => {
  return (
    <>
      <div class="create-post">
        <Row>
          <Col md={7} sm={7}>
            <div class="form-group">
              <img
                src={sarah}
                alt=""
                class="profile-photo-md"
              />
              <textarea
                name="texts"
                id="exampleTextarea"
                cols="30"
                rows="1"
                class="form-control"
                placeholder="Write what you wish"
              ></textarea>
            </div>
          </Col>
          <Col md={5} sm={5}>
            <div class="tools">
              <ul class="publishing-tools list-inline">
                <li>
                  <NavLink to="#">
                    <i class="ion-compose"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i class="ion-images"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i class="ion-ios-videocam"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i class="ion-map"></i>
                  </NavLink>
                </li>
              </ul>
              <button class="btn btn-primary pull-right">Publish</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default CreatePost;
