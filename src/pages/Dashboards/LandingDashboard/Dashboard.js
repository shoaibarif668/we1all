import React from "react"
import DashboardContent from "../../../components/UserDashboardComponents/DashboardContent";
import DashboardTop from "../../../components/UserDashboardComponents/DashboardTop";
import {Container} from "react-bootstrap";
const Dashboard = () =>{
    return(
        <>
        <div className="dashboard__main__wrapper">
            <Container>
                <DashboardTop/>
                <DashboardContent/>
            </Container>
        </div>
        </>
    )
}
export default Dashboard;