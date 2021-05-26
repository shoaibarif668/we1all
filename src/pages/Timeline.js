import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import TimelineLanding from "../components/TimelineComponent/TimelineLanding"

const Timeline = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <TimelineLanding/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default Timeline;