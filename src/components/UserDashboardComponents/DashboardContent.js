import React from "react"
import {Row,Col} from "react-bootstrap"
import {AiOutlineVideoCamera,AiOutlinePicture,AiOutlineComment,AiOutlineRead,AiOutlineLike,AiOutlineDislike} from "react-icons/ai"
import {FaShare} from "react-icons/fa"
import {FaBloggerB} from "react-icons/fa"
import WebEngagementLineGraph from "./WebEngagementLineGraph"
import WetubeViewsBarGraph from "./WetubeViewsBarGraph"
const DashboardContent = () =>{
    return(
        <>
        <div className="dashboard__content__wrapper">
            <Row>
                <Col md={4}>
                    <div className="dashboard__content__left">
                        <div className="dashboard__content__followers">
                            <h3>Followers / Likes</h3>
                            <div className="dashboard__content__outer__wrapper">
                                <div className="dashboard__content__inner__wrapper">
                                    <h6><AiOutlineVideoCamera/></h6>
                                    <h4>Wetube</h4>
                                    <p>56,985</p>
                                </div>
                                <div className="dashboard__content__inner__wrapper">
                                    <h6><FaBloggerB/></h6>
                                    <h4>Blogs</h4>
                                    <p>34,609</p>
                                </div>
                                <div className="dashboard__content__inner__wrapper">
                                    <h6><AiOutlinePicture/></h6>
                                    <h4>Pictures</h4>
                                    <p>41,125</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className="dashboard__content__blogs">
                            <h3>Blog Engagement</h3>
                            <div className="dashboard__blogs__outer__wrapper">
                                <div className="dashboard__blogs__inner__wrapper">
                                    <div className="dashboard__blogs__icon">
                                        <h6><AiOutlineComment/></h6>
                                    </div>
                                    <div className="dashboard__blogs__inner__content">
                                        <h4>Total Comments</h4>
                                        <p>54,783</p>
                                    </div>
                                </div>
                                <div className="dashboard__blogs__inner__wrapper">
                                    <div className="dashboard__blogs__icon">
                                        <h6><AiOutlineLike/></h6>
                                    </div>
                                    <div className="dashboard__blogs__inner__content">
                                        <h4>Total Likes</h4>
                                        <p>56,985</p>
                                    </div>
                                </div>
                                <div className="dashboard__blogs__inner__wrapper">
                                    <div className="dashboard__blogs__icon">
                                        <h6><AiOutlineRead/></h6>
                                    </div>
                                    <div className="dashboard__blogs__inner__content">
                                        <h4>Total Reads</h4>
                                        <p>78,222</p>
                                    </div>
                                </div>
                                <div className="dashboard__blogs__inner__wrapper">
                                    <div className="dashboard__blogs__icon">
                                        <h6><AiOutlineDislike/></h6>
                                    </div>
                                    <div className="dashboard__blogs__inner__content">
                                        <h4>Total Dislikes</h4>
                                        <p>45,211</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="dashboard__content__right">
                        <div className="dashboard__content__right__top">
                            <div className="dashboard__content__pictures">
                                <h3>Picture Engagement</h3>
                                <div className="dashboard__pictures__outer__wrapper">

                                    <div className="dashboard__pictures__inner__wrapper">
                                        <h6><AiOutlineLike/></h6>
                                        <h4>Likes</h4>
                                        <p>34,609</p>
                                    </div>
                                    <div className="dashboard__pictures__inner__wrapper">
                                        <h6><FaShare/></h6>
                                        <h4>Shares</h4>
                                        <p>41,125</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard__content__website">
                            <h3>Website Engagement</h3>
                                <div className="dashboard__website__graph">
                                    <WebEngagementLineGraph/>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard__content__right__bottom">
                            <div className="dashboard__content__wetube">
                                <h3>Wetube Channel Views</h3>
                                <div className="dashboard__wetube__graph">
                                    <WetubeViewsBarGraph/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
}
export default DashboardContent;