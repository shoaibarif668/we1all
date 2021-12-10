import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
import EditProfileSettingsLanding from "../../../components/EditProfileComponent/EditProfileSettingsLanding"

const EditProfileSettings = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfileSettingsLanding/>
            </div>
        </Container>
        </>
    )
}
export default EditProfileSettings;