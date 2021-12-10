import React from "react"
import PicturesLeftBar from "../../../components/PicturesDashboard/PicturesLeftBar";
import PicturesRightBar from "../../../components/PicturesDashboard/PicturesRightBar";
import PicturesWall from "../../../components/PicturesDashboard/PicturesWall";
import PictureTopBar from "../../../components/PicturesDashboard/PictureTopBar";
const PicturesDashboard = () =>{
    return(
        <>
        <div className="picture__main__wrapper">
                <PicturesLeftBar/>
                <PictureTopBar/>
                <PicturesWall/>
                <PicturesRightBar/>
        </div>
        </>
    )
}
export default PicturesDashboard;