import React from "react";
import {GrNotification} from "react-icons/gr"
import {AiOutlineSearch} from "react-icons/ai"
const PicturesTopBar = () =>{
    return(
        <>
        <div className="pictures__topbar__wrapper">
                <div className="pictures__topbar__tools">
                    <div className="search__wrapper">
                        <span><AiOutlineSearch/></span>
                        <input type="text" name="search" placeholder="Search Posts"/>
                    </div>
                    <div>
                        <button>+ Create Post</button>
                        <span><GrNotification/></span>
                    </div>
                    
                </div>
        </div>
        </>
    )
}
export default PicturesTopBar;