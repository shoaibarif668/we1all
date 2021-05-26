import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import TimelineAboutLanding from "../components/TimelineComponent/TimelineAboutLanding"

const TimelineAbout = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <TimelineAboutLanding/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default TimelineAbout;