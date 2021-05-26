import { nanoid } from "nanoid";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import diana from "../../images/diana.jpg";
import john from "../../images/john.jpg";
import sarah from "../../images/sarah.jpg";
import profile from "../../images/profileImg.png"
const NewsFeedContent = () => {
  const posts = [
    {
      postSrc: "http://placehold.it/1920x1280",
      isImg:true,
      isPost:true,
      profileSrc: profile,
      profile: "/newsfeed",
      userName: "Alexis Clark",
      activity: "Published a photo about 3 mins ago",
      likes: 13,
      dislikes: 0,
      followage: true,
      postContent:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postComments: [
        {
          commentor: "Diana",
          commentPic: diana,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        {
          commentor: "John",
          commentPic: john,
          profileLink: "/newsfeed",
          comment:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
      ],
    },
    {
        postSrc: "../../videos/1.mp4",
        isImg:false,
        isPost:true,
        profileSrc: profile,
        profile: "/newsfeed",
        userName: "Sophia Lee",
        activity: "Updated her status about 33 mins ago",
        likes: 75,
        dislikes: 8,
        followage: true,
        postContent:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        postComments: [
          {
            commentor: "Olivia",
            commentPic: profile,
            profileLink: "/newsfeed",
            comment:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          },
          {
            commentor: "Sarah",
            commentPic: profile,
            profileLink: "/newsfeed",
            comment:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          },
          {
            commentor: "Linda",
            commentPic: profile,
            profileLink: "/newsfeed",
            comment:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          },
        ],
      },
      {
        isPost:false,
        profileSrc: profile,
        profile: "/newsfeed",
        userName: "Linda Lohan",
        activity: "Published a photo about 1 hour ago",
        likes: 23,
        dislikes: 4,
        followage: true,
        postContent:
          " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        postComments: [
          {
            commentor: "Chris",
            commentPic: profile,
            profileLink: "/newsfeed",
            comment:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",
          },
        ],
      },
  ];

  return (
    <>
      {posts.map((postData) => {
        return (
          <Fragment key={nanoid()}>
            <div class="post-content">
                {postData.isPost ? (
                    <>
                    {postData.isImg ? (
                        <img
                    src={postData.postSrc}
                    alt="post"
                    class="img-responsive post-image"
                    />
                    ) : (
                    <div className="video-wrapper">
                        <video class="post-video" controls> <source src={postData.postSrc} type="video/mp4"/> </video>
                    </div>
                    )}
                    </>
                ) : ""}
                
                
              
              <div class="post-container">
                <img
                  src={postData.profileSrc}
                  alt="user"
                  class="profile-photo-md pull-left"
                />
                <div class="post-detail">
                  <div class="user-info">
                    <h5>
                      <NavLink to={postData.profile} class="profile-link">
                        {postData.userName}
                      </NavLink>
                      <span class="following">
                        {postData.followage ? "following" : "follow"}
                      </span>
                    </h5>
                    <p class="text-muted">{postData.activity}</p>
                  </div>
                  <div class="reaction">
                    <p class="btn text-green">
                      <i class="icon ion-thumbsup"></i> {postData.likes}
                    </p>
                    <p class="btn text-red">
                      <i class="fa fa-thumbs-down"></i> {postData.dislikes}
                    </p>
                  </div>
                  <div class="line-divider"></div>
                  <div class="post-text">
                    <p>
                      {postData.postContent}
                      <i class="em em-anguished"></i>
                      <i class="em em-anguished"></i>
                      <i class="em em-anguished"></i>
                    </p>
                  </div>
                  <div class="line-divider"></div>
                  {postData.postComments.map((commentData) => {
                    return (
                      <Fragment key={nanoid()}>
                        <div class="post-comment">
                          <img
                            src={commentData.commentPic}
                            alt={commentData.commentor}
                            class="profile-photo-sm"
                          />
                          <p>
                            <NavLink
                              to={commentData.profileLink}
                              class="profile-link"
                            >
                              {commentData.commentor}
                            </NavLink>
                            {commentData.comment}
                          </p>
                        </div>
                      </Fragment>
                    );
                  })}
                  <div class="post-comment">
                    <img src={sarah} alt="" class="profile-photo-sm" />
                    <input type="text" class="form-control" placeholder="Post a comment"/>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};
export default NewsFeedContent;
