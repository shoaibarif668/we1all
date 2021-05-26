import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Footer from "../components/LayoutComponent/Footer";
import Header from "../components/LayoutComponent/Header";
import ChatBlock from "../components/NewsFeedComponent/ChatBlock";
import NewsFeedContent from "../components/NewsFeedComponent/NewsFeedContent";
import NewsFeedNav from "../components/NewsFeedComponent/NewsFeedNav";
import NewsFeedSuggestion from "../components/NewsFeedComponent/NewsFeedSuggestions";
import ProfileCard from "../components/NewsFeedComponent/ProfileCard";
import CreatePost from "../components/TimelineComponent/CreatePost"
import ProfileFriends from "../components/TimelineComponent/ProfileFriends"
const NewsFeedFriends = () => {
  return (
    <>
      <Header />
      <div id="page-contents">
        <Container>
          <Row>
              <Col md={3} static>
                <ProfileCard/>
                <NewsFeedNav/>
                <ChatBlock/>
              </Col>
              <Col md={7}>
                <CreatePost/>
                <ProfileFriends/>
              </Col>
              <Col md={2}>
                  <NewsFeedSuggestion/>
              </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default NewsFeedFriends;
