import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import TimelineAlbumLanding from "../components/TimelineComponent/TimelineAlbumLanding"

const TimelineAlbum = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <TimelineAlbumLanding/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default TimelineAlbum;