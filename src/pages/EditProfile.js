import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import EditProfileComponent from "../components/EditProfileComponent/EditProfileLanding"

const EditProfile = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfileComponent/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default EditProfile;