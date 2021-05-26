import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import FaceMap from "../../images/face-map.png"
import Bounce  from 'react-reveal/Bounce';
const HomeFeatures = () => {
  return (
    <>
      <section id="features">
        <div className="container wrapper">
        <Bounce  top>
          <h1 className="section-title slideDown">social herd</h1>
          </Bounce >
          <Bounce  bottom>
          <div className="row slideUp">
            <div className="feature-item col-md-2 col-sm-6 col-xs-6 col-md-offset-2">
              <div className="feature-icon">
                <i className="icon ion-person-add"></i>
              </div>
              <h3>Make Friends</h3>
            </div>
            <div className="feature-item col-md-2 col-sm-6 col-xs-6">
              <div className="feature-icon">
                <i className="icon ion-images"></i>
              </div>
              <h3>Publish Posts</h3>
            </div>
            <div className="feature-item col-md-2 col-sm-6 col-xs-6">
              <div className="feature-icon">
                <i className="icon ion-chatbox-working"></i>
              </div>
              <h3>Private Chats</h3>
            </div>
            <div className="feature-item col-md-2 col-sm-6 col-xs-6">
              <div className="feature-icon">
                <i className="icon ion-compose"></i>
              </div>
              <h3>Create Polls</h3>
            </div>
          </div>
          </Bounce >
          <h2 className="sub-title">find awesome people like you</h2>
          <CountUp redraw={true} end={101242} >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span className="incremental-counter" ref={countUpRef} />
            </VisibilitySensor>
        )}
          </CountUp>
         
          <p>People Already Signed Up</p>
          <Bounce bottom>
          <img
            src={FaceMap}
            alt=""
            className="img-responsive face-map slideUp hidden-sm hidden-xs"
          />
          </Bounce>
        </div>
      </section>
    </>
  );
};
export default HomeFeatures;
