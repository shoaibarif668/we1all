import React,{useState} from "react"
import { Row,Col } from "react-bootstrap";
import {NavLink} from "react-router-dom"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {BiTrendingUp} from "react-icons/bi"
import {MdWatchLater} from "react-icons/md"
import Pagination from "react-js-pagination";

const WetubeContent = () =>{
    const [activePages,setActivePages] = useState(1)

    const handlePageChange = (pageNumber) => {
        alert(`active page is ${pageNumber}`);
        setActivePages(pageNumber);
      }
    return(
        <>
        <div className="dashboard__content__wrapper">
            <Row>
                <Col md={4}>
                    <div className="wetube__content__history">
                        <h1>History</h1>
                        {/* History Videos Wrapper */}
                        <div className="videos__wrapper">
                            <div className="wetube__video__thumbnail">
                                <AiOutlinePlayCircle/>
                                <h6>12:57</h6>
                            </div>
                            <div className="wetube__video__title">
                                <p>Lorem ipsum dolor sit...</p>
                                <NavLink to="/wetube">Lorem Ipsum</NavLink>
                            </div>
                        </div>
                        <div className="videos__wrapper">
                            <div className="wetube__video__thumbnail">
                                <AiOutlinePlayCircle/>
                                <h6>12:57</h6>
                            </div>
                            <div className="wetube__video__title">
                                <p>Lorem ipsum dolor sit...</p>
                                <NavLink to="/wetube">Lorem Ipsum</NavLink>
                            </div>
                        </div>

                        <div className="wetube__content__history__bottom">
                            <h2><BiTrendingUp/> Trending</h2>
                            <h2><MdWatchLater/> Watch Later</h2>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="wetube__content__videos">
                        <Row>
                            <Col md={6} style={{marginBottom:"10px"}}>
                                <div className="wetube__single__video__wrapper">
                                    <div className="wetube__video__thumbnail">
                                        <AiOutlinePlayCircle/>
                                        <h6>12:57</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit...</p>
                                    <NavLink to="/wetube">Lorem Ipsum</NavLink>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="wetube__single__video__wrapper">
                                    <div className="wetube__video__thumbnail">
                                        <AiOutlinePlayCircle/>
                                        <h6>12:57</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit...</p>
                                    <NavLink to="/wetube">Lorem Ipsum</NavLink>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="wetube__single__video__wrapper">
                                    <div className="wetube__video__thumbnail">
                                        <AiOutlinePlayCircle/>
                                        <h6>12:57</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit...</p>
                                    <NavLink to="/wetube">Lorem Ipsum</NavLink>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="wetube__single__video__wrapper">
                                    <div className="wetube__video__thumbnail">
                                        <AiOutlinePlayCircle/>
                                        <h6>12:57</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit...</p>
                                    <NavLink to="/wetube">Lorem Ipsum</NavLink>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="wetube__videos__pagination">
                                <Pagination
                                    activePage={activePages}
                                    itemsCountPerPage={4}
                                    totalItemsCount={200}
                                    pageRangeDisplayed={5}
                                    onChange={handlePageChange}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
        </> 
    )
}
export default WetubeContent;