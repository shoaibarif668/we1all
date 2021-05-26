import React,{Fragment} from "react";
import { NavLink } from "react-router-dom";
import {nanoid} from "nanoid"
const ProfileNotification = () => {
  const ProfileNotificationData = [
    {
      link: "#",
      activity: "Commented on a Photo",
      name: "Sarah",
      time: "5 mins ago",
    },
    {
      link: "#",
      activity: " Has posted a photo",
      name: "Sarah",
      time: "an hour ago",
    },
    {
      link: "#",
      activity: "Liked her friend's post",
      name: "Sarah",
      time: "4 hours ago",
    },
    {
      link: "#",
      activity: "has shared an album",
      name: "Sarah",
      time: "a day ago",
    },
  ];
  return (
    <>
      <div id="sticky-sidebar">
        <h4 class="grey">Sarah's activity</h4>
        {ProfileNotificationData.map((data) => {
          return (
            <Fragment key={nanoid()}>
              <div class="feed-item" >
                <div class="live-activity">
                  <p>
                    <NavLink to={data.link} class="profile-link">
                      {data.name}
                    </NavLink>{" "}
                    {data.activity}
                  </p>
                  <p class="text-muted">{data.time}</p>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
export default ProfileNotification;
