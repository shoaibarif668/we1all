import React, { Fragment } from "react";
import Diana from "../../images/diana.jpg";
import John from "../../images/john.jpg";
import { Row, Col } from "react-bootstrap";
import Sarah from "../../images/sarah.jpg";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import profile from "../../images/profileImg.png"
const NewsFeedUserImages = () => {
  const userImage = [
    {
      gridItemNo: 1,
      gridImg: "http://placehold.it/1920x1280",
      likes: 63,
      dislikes: 12,
      profileImg: Sarah,
      uploaderName: "Richard Bell",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
      gridItemNo: 2,
      gridImg: "http://placehold.it/1920x1280",
      likes: 100,
      dislikes: 99,
      profileImg: Sarah,
      uploaderName: "Sarah Cruiz",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
      gridItemNo: 3,
      gridImg: "http://placehold.it/1920x1280",
      likes: 233,
      dislikes: 30,
      profileImg: Sarah,
      uploaderName: "Robert Cook",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
      gridItemNo: 4,
      gridImg: "http://placehold.it/1920x1280",
      likes: 73,
      dislikes: 4,
      profileImg: Sarah,
      uploaderName: "John Doe",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
      gridItemNo: 5,
      gridImg: "http://placehold.it/1920x1280",
      likes: 34,
      dislikes: 2,
      profileImg: Sarah,
      uploaderName: "Sophia Lee",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
      gridItemNo: 6,
      gridImg: "http://placehold.it/1920x1280",
      likes: 71,
      dislikes: 0,
      profileImg: Sarah,
      uploaderName: "John Doe",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
      gridItemNo: 7,
      gridImg: "http://placehold.it/1920x1280",
      likes: 55,
      dislikes: 2,
      profileImg: Sarah,
      uploaderName: "Alexis Clark",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
      gridItemNo: 8,
      gridImg: "http://placehold.it/1920x1280",
      likes: 81,
      dislikes: 1,
      profileImg: Sarah,
      uploaderName: "Linda Lohan",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
      gridItemNo: 9,
      gridImg: "http://placehold.it/1920x1280",
      likes: 79,
      dislikes: 9,
      profileImg: Sarah,
      uploaderName: "Julia Cox",
      uploaderDP:profile,
      time: "Published a photo about 3 mins ago",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: Diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: John,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
  ];
  return (
    <>
      <div className="media">
        <Row
          className="js-masonry"
          data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'
        >
          {userImage.map((data) => {
            return (
              <Fragment key={nanoid()}>
                <Col md={6} sm={6} className="grid-item">
                  <div className="media-grid">
                    <div
                      className="img-wrapper"
                      data-toggle="modal"
                      data-target={`.modal-${data.gridItemNo}`}
                    >
                      <img
                        src={data.gridImg}
                        alt="post"
                        className="img-responsive post-image"
                      />
                    </div>
                    <div className="media-info">
                      <div className="reaction">
                        <p className="btn text-green">
                          <i className="fa fa-thumbs-up"></i> {data.likes}
                        </p>
                        <p className="btn text-red">
                          <i className="fa fa-thumbs-down"></i> {data.dislikes}
                        </p>
                      </div>
                      <div className="user-info">
                        <img
                          src={data.uploaderDP}
                          alt={data.uploaderName}
                          className="profile-photo-sm pull-left"
                        />
                        <div className="user">
                          <h6>
                            <NavLink to="#" className="profile-link">
                              {data.uploaderName}
                            </NavLink>
                          </h6>
                          <NavLink className="text-green" to="#">
                            Friend
                          </NavLink>
                        </div>
                      </div>
                    </div>

                    {/* <!--Popup--> */}
                    <div
                      className={`modal fade modal-${data.gridItemNo}`}
                      tabindex="-1"
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="post-content">
                            <img
                              src={data.gridImg}
                              alt="post"
                              className="img-responsive post-image"
                            />
                            <div className="post-container">
                              <img
                                src={data.uploaderDP}
                                alt={data.uploaderName}
                                className="profile-photo-md pull-left"
                              />
                              <div className="post-detail">
                                <div className="user-info">
                                  <h5>
                                    <a
                                      href="timeline.html"
                                      className="profile-link"
                                    >
                                      {data.uploaderName}
                                    </a>
                                    <span className="following">following</span>
                                  </h5>
                                  <p className="text-muted">{data.time}</p>
                                </div>
                                <div className="reaction">
                                  <p className="btn text-green">
                                    <i className="icon ion-thumbsup"></i>
                                    {data.likes}
                                  </p>
                                  <p className="btn text-red">
                                    <i className="fa fa-thumbs-down"></i>
                                    {data.dislikes}
                                  </p>
                                </div>
                                <div className="line-divider"></div>
                                <div className="post-text">
                                  <p>
                                    {data.postContent}
                                    <i className="em em-anguished"></i>
                                    <i className="em em-anguished"></i>
                                    <i className="em em-anguished"></i>
                                  </p>
                                </div>
                                <div className="line-divider"></div>
                                {data.postComments.map((commentData) => {
                                  return (
                                    <Fragment key={nanoid()}>
                                      <div className="post-comment">
                                        <img
                                          src={commentData.commentPic}
                                          alt={commentData.commentor}
                                          className="profile-photo-sm"
                                        />
                                        <p>
                                          <NavLink
                                            to={commentData.profileLink}
                                            className="profile-link"
                                          >
                                            {commentData.commentor}
                                          </NavLink>
                                          {commentData.comment}
                                        </p>
                                      </div>
                                    </Fragment>
                                  );
                                })}
                                <div className="post-comment">
                                  <img
                                    src={data.profileImg}
                                    alt="user"
                                    className="profile-photo-sm"
                                  />
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Post a comment"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--Popup End--> */}
                  </div>
                </Col>
              </Fragment>
            );
          })}
        </Row>
      </div>
    </>
  );
};
export default NewsFeedUserImages;
