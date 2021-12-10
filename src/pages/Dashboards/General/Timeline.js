import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
import TimelineLanding from "../../../components/TimelineComponent/TimelineLanding"

const Timeline = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <TimelineLanding/>
            </div>
        </Container>
        </>
    )
}
export default Timeline;