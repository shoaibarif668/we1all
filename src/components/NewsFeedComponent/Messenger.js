import { nanoid } from "nanoid";
import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Sarah from '../../images/sarah.jpg'
import profile from "../../images/profileImg.png"
const Messenger = () => {
  const users = [
    {
      userNo: 1,
      profileImg: profile,
      userName: "Linda Lohan",
      latestMsg: "Hi there, how are you",
      latestMsgTime: "a min ago",
      notificationStatus: 1,
      seen: false,
    },
    {
      userNo: 2,
      profileImg: profile,
      userName: "Julia Cox",
      latestMsg: "see you soon",
      latestMsgTime: "an hour ago",
      notificationStatus: <i class="icon ion-checkmark-round"></i>,
      seen: true,
    },
    {
      userNo: 3,
      profileImg: profile,
      userName: "Sophia Lee",
      latestMsg: "Okay fine. thank you",
      latestMsgTime: "13 hours ago",
      notificationStatus: <i class="icon ion-reply"></i>,
      seen: true,
    },
    {
      userNo: 4,
      profileImg: profile,
      userName: "John Doe",
      latestMsg: "hey anybody there",
      latestMsgTime: "Yesterday",
      notificationStatus: 1,
      seen: false,
    },
    {
      userNo: 5,
      profileImg: profile,
      userName: "Anna Young",
      latestMsg: "I gotta go",
      latestMsgTime: "2 min ago",
      notificationStatus: <i class="icon ion-checkmark-round"></i>,
      seen: true,
    },
    {
      userNo: 6,
      profileImg: profile,
      userName: "Richard Bell",
      latestMsg: "Hey there?",
      latestMsgTime: "a min ago",
      notificationStatus: 1,
      seen: false,
    },
  ];
  // const messages = [];
  return (
    <>
      <div class="chat-room">
        <Row>
          <Col md={5}>
            {/* <!-- Contact List in Left--> */}
            <ul class="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer">
              {users.map((data) => {
                return (
                  <Fragment key={nanoid()}>
                    <li>
                      <a href={`#contact-${data.userNo}`} data-toggle="tab">
                        <div class="contact">
                          <img
                            src={data.profileImg}
                            alt={data.userName}
                            class="profile-photo-sm pull-left"
                          />
                          <div class="msg-preview">
                            <h6>{data.userName}</h6>
                            <p class="text-muted">{data.latestMsg}</p>
                            <small class="text-muted">
                              {data.latestMsgTime}
                            </small>
                            {data.seen ? (
                              <div class="seen">{data.notificationStatus}</div>
                            ) : (
                              <div class="chat-alert">
                                {data.notificationStatus}
                              </div>
                            )}
                          </div>
                        </div>
                      </a>
                    </li>
                  </Fragment>
                );
              })}
             
            </ul>
            {/* <!--Contact List in Left End--> */}
          </Col>
          <Col md={7}>
            {/* <!--Chat Messages in Right--> */}
            <div class="tab-content scrollbar-wrapper wrapper scrollbar-outer">
              <div class="tab-pane active" id="contact-1">
                <div class="chat-body">
                  <ul class="chat-message">
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Linda Lohan</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>
                        <p>
                          Hi honey, how are you doing???? Long time no see.
                          Where have you been?
                        </p>
                      </div>
                    </li>
                    <li class="right">
                      <img
                        src={Sarah}
                        alt=""
                        class="profile-photo-sm pull-right"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sarah Cruiz</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>
                        <p>I have been on vacation</p>
                      </div>
                    </li>
                    <li class="right">
                      <img
                        src={Sarah}
                        alt=""
                        class="profile-photo-sm pull-right"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sarah Cruiz</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>
                        <p>
                          it was a great time for me. we had a lot of fun
                          <i class="em em-blush"></i>
                        </p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Linda Lohan</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>
                        <p>
                          that's cool I wish I were you
                          <i class="em em-expressionless"></i>
                        </p>
                      </div>
                    </li>
                    <li class="right">
                      <img
                        src={Sarah}
                        alt=""
                        class="profile-photo-sm pull-right"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sarah Cruiz</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>
                        <p>
                          <i class="em em-hand"></i>
                        </p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Linda Lohan</h5>
                          <small class="text-muted">a min ago</small>
                        </div>
                        <p>Hi there, how are you</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane" id="contact-2">
                <div class="chat-body">
                  <ul class="chat-message">
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Julia Cox</h5>
                          <small class="text-muted">a day ago</small>
                        </div>
                        <p>Hi</p>
                      </div>
                    </li>
                    <li class="right">
                      <img
                        src={Sarah}
                        alt=""
                        class="profile-photo-sm pull-right"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sarah Cruiz</h5>
                          <small class="text-muted">a day ago</small>
                        </div>
                        <p>hellow</p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Julia Cox</h5>
                          <small class="text-muted">an hour ago</small>
                        </div>
                        <p>good</p>
                      </div>
                    </li>
                    <li class="right">
                      <img
                        src={Sarah}
                        alt=""
                        class="profile-photo-sm pull-right"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sarah Cruiz</h5>
                          <small class="text-muted">an hour ago</small>
                        </div>
                        <p>see you soon</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane" id="contact-3">
                <div class="chat-body">
                  <ul class="chat-message">
                    <li class="right">
                      <img
                        src={Sarah}
                        alt=""
                        class="profile-photo-sm pull-right"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sarah</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sophia Lee</h5>
                          <small class="text-muted">a day ago</small>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt
                        </p>
                      </div>
                    </li>
                    <li class="right">
                      <img
                        src={Sarah}
                        alt=""
                        class="profile-photo-sm pull-right"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sarah Cruiz</h5>
                          <small class="text-muted">13 hours ago</small>
                        </div>
                        <p>Okay fine. thank you</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane" id="contact-4">
                <div class="chat-body">
                  <ul class="chat-message">
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>John Doe</h5>
                          <small class="text-muted">a day ago</small>
                        </div>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio. Nam libero
                          tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus id quod maxime placeat facere
                          possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus. Temporibus autem quibusdam et aut
                          officiis debitis aut rerum necessitatibus saepe
                          eveniet ut et voluptates repudiandae sint et molestiae
                          non recusandae.
                        </p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>John Doe</h5>
                          <small class="text-muted">a day ago</small>
                        </div>
                        <p>hey anybody there</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane" id="contact-5">
                <div class="chat-body">
                  <ul class="chat-message">
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Anna Young</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores
                        </p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Anna Young</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </li>
                    <li class="right">
                      <img
                        src={Sarah}
                        alt=""
                        class="profile-photo-sm pull-right"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Sarah Cruiz</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <p>I gotta go</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane" id="contact-6">
                <div class="chat-body">
                  <ul class="chat-message">
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Richard Bell</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <p>Hello</p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Richard Bell</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <p>Hi</p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Richard Bell</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <p>Hey</p>
                      </div>
                    </li>
                    <li class="left">
                      <img
                        src={profile}
                        alt=""
                        class="profile-photo-sm pull-left"
                      />
                      <div class="chat-item">
                        <div class="chat-item-header">
                          <h5>Richard Bell</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <p>Hey there</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--Chat Messages in Right End--> */}

            <div class="send-message">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type your message"
                />
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">
                    Send
                  </button>
                </span>
              </div>
            </div>
          </Col>
          <div class="clearfix"></div>
        </Row>
      </div>
    </>
  );
};
export default Messenger;
