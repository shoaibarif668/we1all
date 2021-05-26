import React from "react"
import Bounce  from 'react-reveal/Bounce';
import HomeDownloadImg from "../../images/HomeDownload.jpg"
import AppStore from "../../images/app-store.png"
import GooglePlay from "../../images/google-play.png"
const HomeDownload = () =>{
    return(
        <>
        <section id="app-download">
			<div className="container wrapper">
                <Bounce top>
				<h1 className="section-title slideDown">Download</h1>
                </Bounce>
                <Bounce bottom>
				<ul className="app-btn list-inline slideUp">
					<li><button className="btn-secondary"><img src={AppStore} alt="App Store" /></button></li>
					<li><button className="btn-secondary"><img src={GooglePlay} alt="Google Play" /></button></li>
				</ul>
                </Bounce>
				<h2 className="sub-title">stay connected anytime, anywhere</h2>
				<img src={HomeDownloadImg} alt="iPhone" className="img-responsive" />
			</div>
		</section>
        </>
    )
}
export default HomeDownload;