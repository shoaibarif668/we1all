import React from "react";
import {Row,Col} from "react-bootstrap"
const EditProfileSettings = () => {
  return (
    <>
      <div class="edit-profile-container">
        <div class="block-title">
          <h4 class="grey">
            <i class="icon ion-ios-settings"></i>Account Settings
          </h4>
          <div class="line"></div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate
          </p>
          <div class="line"></div>
        </div>
        <div class="edit-block">
          <div class="settings-block">
            <Row>
              <Col sm={9}>
                <div class="switch-description">
                  <div>
                    <strong>Enable follow me</strong>
                  </div>
                  <p>Enable this if you want people to follow you</p>
                </div>
              </Col>
              <Col sm={3}>
                <div class="toggle-switch">
                  <label class="switch">
                    <input type="checkbox"  />
                    <span class="slider round"></span>
                  </label>
                </div>
              </Col>
            </Row>
          </div>
          <div class="line"></div>
          <div class="settings-block">
            <Row>
              <Col sm={9}>
                <div class="switch-description">
                  <div>
                    <strong>Send me notifications</strong>
                  </div>
                  <p>
                    Send me notification emails my friends like, share or
                    message me
                  </p>
                </div>
              </Col>
              <Col sm={3}>
                <div class="toggle-switch">
                  <label class="switch">
                    <input type="checkbox"  />
                    <span class="slider round"></span>
                  </label>
                </div>
              </Col>
            </Row>
          </div>
          <div class="line"></div>
          <div class="settings-block">
            <Row>
              <Col sm={9}>
                <div class="switch-description">
                  <div>
                    <strong>Text messages</strong>
                  </div>
                  <p>Send me messages to my cell phone</p>
                </div>
              </Col>
              <Col sm={3}>
                <div class="toggle-switch">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </Col>
            </Row>
          </div>
          <div class="line"></div>
          <div class="settings-block">
            <Row>
              <Col sm={9}>
                <div class="switch-description">
                  <div>
                    <strong>Enable tagging</strong>
                  </div>
                  <p>Enable my friends to tag me on their posts</p>
                </div>
              </Col>
              <Col sm={3}>
                <div class="toggle-switch">
                  <label class="switch">
                    <input type="checkbox"  />
                    <span class="slider round"></span>
                  </label>
                </div>
              </Col>
            </Row>
          </div>
          <div class="line"></div>
          <div class="settings-block">
            <Row>
              <Col sm={9}>
                <div class="switch-description">
                  <div>
                    <strong>Enable sound</strong>
                  </div>
                  <p>
                    You'll hear notification sound when someone sends you a
                    private message
                  </p>
                </div>
              </Col>
              <Col sm={3}>
                <div class="toggle-switch">
                  <label class="switch">
                    <input type="checkbox"  />
                    <span class="slider round"></span>
                  </label>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfileSettings;
