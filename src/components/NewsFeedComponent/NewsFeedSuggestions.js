import { nanoid } from "nanoid";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Profile from "../../images/profileImg.png"
const NewsFeedSuggestion = () => {
  const SuggestionData = [
    {
      userProfile: Profile,
      userName: "Diana Ambers",
      profileLink: "/timeline",
    },
    {
        userProfile: Profile,
        userName: "Cris Haris",
        profileLink: "/timeline",
      },
      {
        userProfile: Profile,
        userName: "Brian Walton",
        profileLink: "/timeline",
      },
      {
        userProfile: Profile,
        userName: "Olivia Steward",
        profileLink: "/timeline",
      },
      {
        userProfile: Profile,
        userName: "Sophia Page",
        profileLink: "/timeline",
      },
  ];
  return (
    <>
      <div class="suggestions" id="sticky-sidebar">
        <h4 class="grey">Who to Follow</h4>
        {SuggestionData.map((data) => {
          return (
            <Fragment key={nanoid()}>
              <div class="follow-user">
                <img
                  src={data.userProfile}
                  alt={data.userName}
                  class="profile-photo-sm pull-left"
                />
                <div>
                  <h5>
                    <NavLink to="timeline.html">{data.userName}</NavLink>
                  </h5>
                  <NavLink to={data.profileLink} class="text-green">
                    Add friend
                  </NavLink>
                </div>
              </div>
            </Fragment>
          );
        })}
        
      </div>
    </>
  );
};
export default NewsFeedSuggestion;
