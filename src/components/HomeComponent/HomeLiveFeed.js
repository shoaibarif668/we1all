import React from "react";
import { NavLink } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { nanoid } from "nanoid";
import { Row, Col } from "react-bootstrap";
import profile from "../../images/profileImg.png"
const HomeLiveFeed = () => {
  const onlineUsers = [
    {
      profileLink: "#",
      userTitle: "Alexis Clark",
      profileImg: profile,
    },
    {
      profileLink: "#",
      userTitle: "James Carter",
      profileImg: profile,
    },
    {
      profileLink: "#",
      userTitle: "Robert Cook",
      profileImg: profile,
    },
    {
      profileLink: "#",
      userTitle: "Richard Bell",
      profileImg: profile,
    },
    {
      profileLink: "#",
      userTitle: "Anna Young",
      profileImg: profile,
    },
    {
      profileLink: "#",
      userTitle: "Julia Cox",
      profileImg: profile,
    },
  ];
  const liveFeeds_1 = [
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Sarah",
      activity: "just posted a photo from Moscow",
      time: "20 sec ago",
    },
    {
      profileImg: profile,
      profileLink: "#",
      userName: "John",
      activity: "Published a post from Sydney",
      time: "1 min ago",
    },
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Julia",
      activity: "Updated her status from London",
      time: "5 min ago",
    },
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Sophia",
      activity: "Share a photo from Virginia",
      time: "10 min ago",
    },
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Linda",
      activity: "just posted a photo from Toronto",
      time: "20 min ago",
    },
  ];
  const liveFeeds_2 = [
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Nora",
      activity: "Shared an article from Ohio",
      time: "22 min ago",
    },
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Addison",
      activity: "Created a poll from Barcelona",
      time: "23 min ago",
    },
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Diana",
      activity: "Posted a video from Captown",
      time: "27 min ago",
    },
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Sarah",
      activity: "Shared friend's post from Moscow",
      time: "30 min ago",
    },
    {
      profileImg: profile,
      profileLink: "#",
      userName: "Emma",
      activity: "Started a new job at Torronto",
      time: "33 min ago",
    },
  ];
  return (
    <>
      <section id="live-feed">
        <div className="container wrapper">
          <Bounce top>
            <h1 className="section-title slideDown">live feed</h1>
          </Bounce>
          <Bounce bottom>
            <ul className="online-users list-inline slideUp">
              {onlineUsers.map((data) => {
                return (
                  <>
                    <li key={nanoid()}>
                      <NavLink to={data.profileLink} title={data.userTitle}>
                        <img
                          src={data.profileImg}
                          alt={data.userTitle}
                          className="img-responsive profile-photo"
                        />
                        <span className="online-dot"></span>
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>
          </Bounce>
          <h2 className="sub-title">see what’s happening now</h2>
          <Row>
            <Col md={{ span: 4, offset: 2 }} sm={6}>
              {liveFeeds_1.map((feedData1) => {
                return (
                  <>
                    <div className="feed-item" key={nanoid()}>
                      <Fade left>
                        <img
                          src={feedData1.profileImg}
                          alt="user"
                          className="img-responsive profile-photo-sm"
                        />
                        <div className="live-activity">
                          <p>
                            <NavLink
                              to={feedData1.profileLink}
                              className="profile-link"
                            >
                              {feedData1.userName}:
                            </NavLink>
                            {feedData1.activity}
                          </p>
                          <p className="text-muted">{feedData1.time}</p>
                        </div>
                      </Fade>
                    </div>
                  </>
                );
              })}
            </Col>

            <Col md={4} sm={6}>
              {liveFeeds_2.map((feedData2) => {
                return (
                  <>
                    <div className="feed-item" key={nanoid()}>
                      <Fade right>
                        <img
                          src={feedData2.profileImg}
                          alt="user"
                          className="img-responsive profile-photo-sm"
                        />
                        <div className="live-activity">
                          <p>
                            <NavLink
                              to={feedData2.profileLink}
                              className="profile-link"
                            >
                              {feedData2.userName}:
                            </NavLink>
                            {feedData2.activity}
                          </p>
                          <p className="text-muted">{feedData2.time}</p>
                        </div>
                      </Fade>
                    </div>
                  </>
                );
              })}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};
export default HomeLiveFeed;
