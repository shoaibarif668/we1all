import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Footer from "../components/LayoutComponent/Footer";
import Header from "../components/LayoutComponent/Header";
import ChatBlock from "../components/NewsFeedComponent/ChatBlock";
import NewsFeedNav from "../components/NewsFeedComponent/NewsFeedNav";
import NewsFeedSuggestion from "../components/NewsFeedComponent/NewsFeedSuggestions";
import ProfileCard from "../components/NewsFeedComponent/ProfileCard";
import Messenger from "../components/NewsFeedComponent/Messenger";
import CreatePost from "../components/TimelineComponent/CreatePost"

const NewsFeedMessages = () => {
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
                <Messenger/>
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
export default NewsFeedMessages;
