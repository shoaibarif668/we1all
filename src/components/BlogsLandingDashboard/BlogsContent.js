import React,{useState} from "react"
import { Row,Col } from "react-bootstrap";
import {NavLink} from "react-router-dom"
import {AiFillLike,AiOutlineHeart} from "react-icons/ai"
import {BsReply} from "react-icons/bs"
import { WithContext as ReactTags } from 'react-tag-input';
import Pagination from "react-js-pagination";
import blogs__placeholder from "../../images/blogs/blogs__placeholder.jpg"
const KeyCodes = {
    comma: 188,
    enter: [10, 13],
  };
  
const delimiters = [...KeyCodes.enter, KeyCodes.comma];

const BlogsContent = () =>{
    const [activePages,setActivePages] = useState(1)
    const [blogTags,setTags] = useState({
        tags: [
            { id: "Books", text: "Books" },
            { id: "Current Affairs", text: "Current Affairs" }
         ]
    })
    const [suggestions,setSuggestions] = useState([
            { id: 'USA', text: 'USA' },
            { id: 'Germany', text: 'Germany' },
            { id: 'Austria', text: 'Austria' },
            { id: 'Costa Rica', text: 'Costa Rica' },
            { id: 'Sri Lanka', text: 'Sri Lanka' },
            { id: 'Thailand', text: 'Thailand' }
         ])

    // Tags
    const handleDelete =(i)=> {
        const { tags } = blogTags;
        setTags({
         tags: tags.filter((tag, index) => index !== i),
        });
    }

    const handleAddition = (tag) => {
        setTags(state => ({ tags: [...state.tags, tag] }));
    }

    const handleDrag = (tag, currPos, newPos) => {
        const tags = [...blogTags.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags({ tags: newTags });
    }

    // Pagination
    const handlePageChange = (pageNumber) => {
        alert(`active page is ${pageNumber}`);
        setActivePages(pageNumber);
      }
    return(
        <>
        <div className="dashboard__content__wrapper">
            <Row>
                <Col md={4}>
                    <div className="blogs__content__tags">
                        <h1>Tags</h1>
                        {/* Blogs Tags Wrapper */}
                        <div className="blogs__wrapper">
                            <ReactTags tags={blogTags.tags}
                                suggestions={suggestions}
                                handleDelete={handleDelete}
                                handleAddition={handleAddition}
                                handleDrag={handleDrag}
                                delimiters={delimiters} />
                        </div>

                        <div className="blgos__tags__bottom">
                            <h2><AiFillLike/> My Liked Blogs</h2>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="blogs__content">
                        <Row>
                            <Col md={6} style={{marginBottom:"10px"}}>
                                <div className="blogs__content__wrapper">
                                    <div className="blogs__content__image">
                                        <img src={blogs__placeholder} alt="Blog"/>
                                    </div>
                                    <div className="blogs__content__description">
                                        <h2>Title</h2>
                                        <div className="blogs__response">
                                            <div className="blogs__response__react">
                                                <span className="left"><AiOutlineHeart/></span>
                                                <span><BsReply/></span>
                                            </div>
                                            <div className="blogs__response__follow">
                                                <NavLink className="left" to="/blog">Follow</NavLink>
                                                <NavLink to="/blog">View</NavLink>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} style={{marginBottom:"10px"}}>
                                <div className="blogs__content__wrapper">
                                    <div className="blogs__content__image">
                                        <img src={blogs__placeholder} alt="Blog"/>
                                    </div>
                                    <div className="blogs__content__description">
                                        <h2>Title</h2>
                                        <div className="blogs__response">
                                            <div className="blogs__response__react">
                                                <span className="left"><AiOutlineHeart/></span>
                                                <span><BsReply/></span>
                                            </div>
                                            <div className="blogs__response__follow">
                                                <NavLink className="left" to="/blog">Follow</NavLink>
                                                <NavLink to="/blog">View</NavLink>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} style={{marginBottom:"10px"}}>
                                <div className="blogs__content__wrapper">
                                    <div className="blogs__content__image">
                                        <img src={blogs__placeholder} alt="Blog"/>
                                    </div>
                                    <div className="blogs__content__description">
                                        <h2>Title</h2>
                                        <div className="blogs__response">
                                            <div className="blogs__response__react">
                                                <span className="left"><AiOutlineHeart/></span>
                                                <span><BsReply/></span>
                                            </div>
                                            <div className="blogs__response__follow">
                                                <NavLink className="left" to="/blog">Follow</NavLink>
                                                <NavLink to="/blog">View</NavLink>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} style={{marginBottom:"10px"}}>
                                <div className="blogs__content__wrapper">
                                    <div className="blogs__content__image">
                                        <img src={blogs__placeholder} alt="Blog"/>
                                    </div>
                                    <div className="blogs__content__description">
                                        <h2>Title</h2>
                                        <div className="blogs__response">
                                            <div className="blogs__response__react">
                                                <span className="left"><AiOutlineHeart/></span>
                                                <span><BsReply/></span>
                                            </div>
                                            <div className="blogs__response__follow">
                                                <NavLink className="left" to="/blog">Follow</NavLink>
                                                <NavLink to="/blog">View</NavLink>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="blogs__pagination">
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
export default BlogsContent;