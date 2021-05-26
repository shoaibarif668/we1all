import React from "react"

const HomeFacts = () =>{
    return(
        <>
        <section id="site-facts">
			<div className="container wrapper">
				<div className="circle">
					<ul className="facts-list">
						<li>
							<div className="fact-icon"><i className="icon ion-ios-people-outline"></i></div>
							<h3 className="text-white">1,01,242</h3>
							<p>People registered</p>
						</li>
						<li>
							<div className="fact-icon"><i className="icon ion-images"></i></div>
							<h3 className="text-white">21,01,242</h3>
							<p>Posts published</p>
						</li>
						<li>
							<div className="fact-icon"><i className="icon ion-checkmark-round"></i></div>
							<h3 className="text-white">41,242</h3>
							<p>People online</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
        </>
    )
}
export default HomeFacts;