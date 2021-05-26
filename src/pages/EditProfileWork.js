import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import EditProfileWorkLanding from "../components/EditProfileComponent/EditProfileWorkLanding"

const EditProfileWork = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfileWorkLanding/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default EditProfileWork;