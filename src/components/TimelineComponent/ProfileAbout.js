import React, { Fragment } from "react";
import org from "../../images/envato.png";
import { nanoid } from "nanoid";
import { NavLink } from "react-bootstrap";
const ProfileAbout = () => {

  const orgData = [
    {
      orgImg: org,
      orgName: "Envato",
      orgDesignation: "Seller",
      orgStartTime: "1 February 2013",
      orgEndTime: "present",
    },
  ];
  return (
    <>
      <div className="about-profile">
        <div className="about-content-block">
          <h4 className="grey">
            <i className="ion-ios-information-outline icon-in-title"></i>Personal
            Information
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
          </p>
        </div>
        <div className="about-content-block">
          <h4 className="grey">
            <i className="ion-ios-briefcase-outline icon-in-title"></i>Work
            Experiences
          </h4>
          {orgData.map((data) => {
            return (
              <Fragment key={nanoid()}>
                <div className="organization" >
                  <img src={data.orgImg} alt="" className="pull-left img-org" />
                  <div className="work-info">
                    <h5>{data.orgName}</h5>
                    <p>
                      {data.orgDesignation} -
                      <span className="text-grey">
                        {data.orgStartTime} to {data.orgEndTime}
                      </span>
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="about-content-block">
          <h4 className="grey">
            <i className="ion-ios-location-outline icon-in-title"></i>Location
          </h4>
          <p>228 Park Eve, New York</p>
          <div className="google-maps">
         <iframe title="my address" width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=228%20Park%20Eve,%20New%20York+(My%20address)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
        </div>
        <div className="about-content-block">
          <h4 className="grey">
            <i className="ion-ios-heart-outline icon-in-title"></i>Interests
          </h4>
          <ul className="interests list-inline">
            <li>
              <span className="int-icons" title="Bycycle riding">
                <i className="icon ion-android-bicycle"></i>
              </span>
            </li>
            <li>
              <span className="int-icons" title="Photography">
                <i className="icon ion-ios-camera"></i>
              </span>
            </li>
            <li>
              <span className="int-icons" title="Shopping">
                <i className="icon ion-android-cart"></i>
              </span>
            </li>
            <li>
              <span className="int-icons" title="Traveling">
                <i className="icon ion-android-plane"></i>
              </span>
            </li>
            <li>
              <span className="int-icons" title="Eating">
                <i className="icon ion-android-restaurant"></i>
              </span>
            </li>
          </ul>
        </div>
        <div className="about-content-block">
          <h4 className="grey">
            <i className="ion-ios-chatbubble-outline icon-in-title"></i>Language
          </h4>
          <ul>
            <li>
              <NavLink to="">Russian</NavLink>
            </li>
            <li>
              <NavLink to="">English</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ProfileAbout;
