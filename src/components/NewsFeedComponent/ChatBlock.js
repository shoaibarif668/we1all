import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Profile from "../../images/profileImg.png";
const ChatBlock = () => {
  const onlineUsers = [
    {
      chatLink: "/newsfeed-messages",
      userTitle: "Linda Lohan",
      userProfile: Profile,
    },
    {
      chatLink: "/newsfeed-messages",
      userTitle: "Sophia Lee",
      userProfile: Profile,
    },
    {
      chatLink: "/newsfeed-messages",
      userTitle: "John Doe",
      userProfile: Profile,
    },
    {
      chatLink: "/newsfeed-messages",
      userTitle: "Alexis Clark",
      userProfile: Profile,
    },
    {
      chatLink: "/newsfeed-messages",
      userTitle: "James Carter",
      userProfile: Profile,
    },
    {
      chatLink: "/newsfeed-messages",
      userTitle: "Robert Cook",
      userProfile: Profile,
    },
    {
      chatLink: "/newsfeed-messages",
      userTitle: "Richard Bell",
      userProfile: Profile,
    },
    {
      chatLink: "/newsfeed-messages",
      userTitle: "Anna Young",
      userProfile: Profile,
    },
    {
      chatLink: "/newsfeed-messages",
      userTitle: "Julia Cox",
      userProfile: Profile,
    },
  ];
  return (
    <>
      <div id="chat-block">
        <div class="title">Chat online</div>
        <ul class="online-users list-inline">
          {onlineUsers.map((data) => {
            return (
              <Fragment>
                <li>
                  <NavLink to={data.chatLink} title={data.userTitle}>
                    <img
                      src={data.userProfile}
                      alt={data.userTitle}
                      class="img-responsive profile-photo"
                    />
                    <span class="online-dot"></span>
                  </NavLink>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default ChatBlock;
