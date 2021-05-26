import React from "react";
import { Row, Col } from "react-bootstrap";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import profile from "../../images/profileImg.png"

const ProfileFriends = () => {
  const FriendsList = [
    {
      name: "Sopia Lee",
      work: "Student at Harvard",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
    {
      name: "John Doe",
      work: "Traveler",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
    {
      name: "Julia Cox",
      work: "Art Director",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
    {
      name: "Robert Cook",
      work: "Photographer at Photography Inc.",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
    {
      name: "Richard Bell",
      work: "Graphic Designer at Envato",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
    {
      name: "Linda Lohan",
      work: "Software Engineer",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
    {
      name: "Anna Young",
      work: "Musician",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
    {
      name: "James Carter",
      work: "CEO at IT Farm",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
    {
      name: "Alexis Clark",
      work: "Traveler",
      displayPic: profile,
      coverPic: "http://placehold.it/1030x360",
    },
  ];
  return (
    <>
      <div class="friend-list">
        <Row>
          {FriendsList.map((data) => {
            return (
              <>
                <Col md={6} sm={6} key={nanoid()}>
                  <div class="friend-card">
                    <img
                      src={data.coverPic}
                      alt="profile-cover"
                      class="img-responsive cover"
                    />
                    <div class="card-info">
                      <img
                        src={data.displayPic}
                        alt="user"
                        class="profile-photo-lg"
                      />
                      <div class="friend-info">
                        <NavLink to="#" class="pull-right text-green">
                          My Friend
                        </NavLink>
                        <h5>
                          <a href="timeline.html" class="profile-link">
                            {data.name}
                          </a>
                        </h5>
                        <p>{data.work}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
    </>
  );
};
export default ProfileFriends;
