import React from "react"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
import EditProfilePasswordLanding from "../components/EditProfileComponent/EditProfilePasswordLanding"
const EditProfilePassword = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfilePasswordLanding/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default EditProfilePassword;