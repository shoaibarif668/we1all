import React from "react"
import {Container} from "react-bootstrap"
import BlogsContent from "../../../components/BlogsLandingDashboard/BlogsContent";
import BlogsTop from "../../../components/BlogsLandingDashboard/BlogsTop";

const BlogsDashboard = () =>{
    return(
        <>
        <div className="blogs__main__wrapper">
            <Container>
                <BlogsTop/>
                <BlogsContent/>
            </Container>
        </div>
        </>
    )
}
export default BlogsDashboard;