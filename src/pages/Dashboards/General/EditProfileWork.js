import React from "react"
import { Container } from "react-bootstrap"
import ProfileCover from "../../../components/LayoutComponent/ProfileCover"
import EditProfileWorkLanding from "../../../components/EditProfileComponent/EditProfileWorkLanding"

const EditProfileWork = () =>{
    return(
        <>
        <Container>
            <div className="timeline">
                <ProfileCover/>
                <EditProfileWorkLanding/>
            </div>
        </Container>
        </>
    )
}
export default EditProfileWork;