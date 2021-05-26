import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import EditProfileSettingsLanding from "../components/EditProfileComponent/EditProfileSettingsLanding"

const EditProfileSettings = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfileSettingsLanding/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default EditProfileSettings;