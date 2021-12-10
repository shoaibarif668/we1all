import React from "react"
import {Container} from "react-bootstrap"
import WetubeContent from "../../../components/WetubeLandingDashboard/WetubeContent";
import WetubeTop from "../../../components/WetubeLandingDashboard/WetubeTop";
const WeTubeDashboard = () =>{
    return(
        <>
        <div className="wetube__main__wrapper">
            <Container>
                <WetubeTop/>
                <WetubeContent/>
            </Container>
        </div>
        </>
    )
}
export default WeTubeDashboard;