import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
import TimelineAboutLanding from "../../../components/TimelineComponent/TimelineAboutLanding"

const TimelineAbout = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <TimelineAboutLanding/>
            </div>
        </Container>
        </>
    )
}
export default TimelineAbout;