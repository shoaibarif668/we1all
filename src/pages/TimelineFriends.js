import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import TimelineFriendsLanding from "../components/TimelineComponent/TimelineFriendsLanding"

const TimelineFriends = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <TimelineFriendsLanding/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default TimelineFriends;