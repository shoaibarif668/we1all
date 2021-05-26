import React from "react"
import EditProfileInterestLanding from "../components/EditProfileComponent/EditProfileInterestLanding"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import { Container } from "react-bootstrap"
import ProfileCover from "../components/LayoutComponent/ProfileCover"
const EditProfileInterest = () =>{
    return(
        <>
        <Header/>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfileInterestLanding/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default EditProfileInterest;