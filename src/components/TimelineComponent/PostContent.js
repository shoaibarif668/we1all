import { NavLink } from "react-router-dom";
import React from "react";
import {nanoid} from "nanoid"
import sarah from "../../images/sarah.jpg"
import post1 from "../../images/post1.jpg"
import post2 from "../../images/post2.jpg"
import john from '../../images/john.jpg'
import diana from "../../images/diana.jpg"
const PostContent = () => {
  const PostData = [
    {
      postSrc: post1,
      profileSrc: sarah,
      profile:"/timeline",
      fname: "Sarah",
      lname: "Cruiz",
      time: "15 min ago",
      likes: 13,
      dislikes: 0,
      type:"photo",
      includeImage:true,
      followage: true,
      postContent:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        postSrc: post2,
        profileSrc: sarah,
        profile:"/timeline",
        fname: "Sarah",
        lname: "Cruiz",
        time: "on 10/22/2016",
        likes: 49,
        dislikes: 0,
        type:"photo",
        includeImage:true,
        followage: true,
        postContent:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        
        profileSrc: sarah,
        profile:"/timeline",
        fname: "Sarah",
        lname: "Cruiz",
        time: "on 10/21/2016",
        likes: 13,
        dislikes: 0,
        includeImage:false,
        type:"photo",
        followage: true,
        postContent:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      
  ];
  const CommentData = [
      {
        commentor:"Diana",
        commentPic:diana,
        profileLink:"/timeline",
        comment:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
      },
      {
        commentor:"John",
        commentPic:john,
        profileLink:"/timeline",
        comment:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
      },
  ]
  return (
    <>
      {PostData.map((data) => {
        return (
          <>
            <div className="post-content" key={nanoid()}>
              {/* <!--Post Date--> */}
              <div className="post-date hidden-xs hidden-sm">
                <h5>{data.fname}</h5>
                <p className="text-grey">{data.time}</p>
              </div>
              {/* <!--Post Date End--> */}
                {data.includeImage ? (
                    <img
                    src={data.postSrc}
                    alt="post"
                    className="img-responsive post-image"
                  />
                ): ""}
              
              <div className="post-container">
                <img
                  src={data.profileSrc}
                  alt="user"
                  className="profile-photo-md pull-left"
                />
                <div className="post-detail">
                  <div className="user-info">
                    <h5>
                      <NavLink to={data.profile} className="profile-link">
                        {data.fname} {data.lname}
                      </NavLink>
                      <span className="following">{data.followage ? "following" : "follow"}</span>
                    </h5>
                    <p className="text-muted">
                      Published a {data.type} {data.time}
                    </p>
                  </div>
                  <div className="reaction">
                    <p className="btn text-green">
                      <i className="icon ion-thumbsup"></i> {data.likes}
                    </p>
                    <p className="btn text-red">
                      <i className="fa fa-thumbs-down"></i> {data.dislikes}
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

                  {CommentData.map((commentData)=>{
                      return(
                          <>
                          <div className="post-comment" key={nanoid()}>
                            <img
                            src={commentData.commentPic}
                            alt=""
                            className="profile-photo-sm"
                            />
                            <p>
                            <NavLink to={commentData.profileLink} className="profile-link">
                               {commentData.commentor}:
                            </NavLink>
                            <i className="em em-laughing"></i>{commentData.comment}
                            </p>
                        </div>
                          </>
                      )
                  })}
                  
                  <div className="post-comment">
                    <img
                      src={sarah}
                      alt=""
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
          </>
        );
      })}
    </>
  );
};
export default PostContent;
