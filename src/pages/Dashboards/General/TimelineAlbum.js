import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
import TimelineAlbumLanding from "../../../components/TimelineComponent/TimelineAlbumLanding"

const TimelineAlbum = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <TimelineAlbumLanding/>
            </div>
        </Container>
        </>
    )
}
export default TimelineAlbum;