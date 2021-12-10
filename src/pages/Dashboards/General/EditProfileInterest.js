import React from "react"
import EditProfileInterestLanding from "../../../components/EditProfileComponent/EditProfileInterestLanding"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
const EditProfileInterest = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfileInterestLanding/>
            </div>
        </Container>
        </>
    )
}
export default EditProfileInterest;