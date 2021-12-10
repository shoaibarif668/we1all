import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
import TimelineFriendsLanding from "../../../components/TimelineComponent/TimelineFriendsLanding"

const TimelineFriends = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <TimelineFriendsLanding/>
            </div>
        </Container>
        </>
    )
}
export default TimelineFriends;