import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
import EditProfilePasswordLanding from "../../../components/EditProfileComponent/EditProfilePasswordLanding"
const EditProfilePassword = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfilePasswordLanding/>
            </div>
        </Container>
        </>
    )
}
export default EditProfilePassword;