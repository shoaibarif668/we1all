import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
import EditProfileComponent from "../../../components/EditProfileComponent/EditProfileLanding"

const EditProfile = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfileComponent/>
            </div>
        </Container>
        </>
    )
}
export default EditProfile;