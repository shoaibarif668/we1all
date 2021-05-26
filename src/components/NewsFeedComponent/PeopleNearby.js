import { nanoid } from "nanoid";
import React, { Fragment } from "react"
import {Row,Col} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import profile from "../../images/profileImg.png"
const PeopleNearby = () =>{
    const nearbyPeople = [
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Sophia Page",
            work:"Software Engineer",
            distance:"500m away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Emma Johnson",
            work:"Model At Fashion",
            distance:"800m away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Nora Wilson",
            work:"Writer At Newspaper",
            distance:"2.5km away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Diana Amber",
            work:"Student",
            distance:"700m away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Addison Thomas",
            work:"Barber At Fashion",
            distance:"1.5k away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Jonathon Thompson",
            work:"Fashion Designer",
            distance:"2k away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Olivia Steward",
            work:"Creative Director",
            distance:"2k away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Elena Foster",
            work:"Executive Officer",
            distance:"4k away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Brian Walton",
            work:"Designer at Designer Inc.",
            distance:"3k away",
            friend:false,
        },
        {
            profileImg:profile,
            userProfile:"#",
            userName:"Cris Haris",
            work:"General Manager at Manager Inc.",
            distance:"1k away",
            friend:false,
        },
    ]
    return(
        <>
            <div class="people-nearby">
              <div class="google-maps">
                <div id="map" class="map"><iframe title="my address" width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=228%20Park%20Eve,%20New%20York+(My%20address)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            </div>
            {nearbyPeople.map((data)=>{
                return(
                    <Fragment key={nanoid()}>
                        <div class="nearby-user">
                            <Row>
                            <Col md={2} sm={2}>
                                <img src={data.profileImg} alt={data.userName} class="profile-photo-lg" />
                            </Col>
                            <Col md={7} sm={7}>
                                <h5><NavLink to={data.userProfile} class="profile-link">{data.userName}</NavLink></h5>
                                <p>{data.work}</p>
                                <p class="text-muted">{data.distance}</p>
                            </Col>
                            <Col md={3} sm={3}>
                                <button class="btn btn-primary pull-right">{data.friend ? "Friend" : "Add A Friend"}</button>
                            </Col>
                            </Row>
                        </div>
                    </Fragment>
                )
            })}
            </div>
        </>
    )
}
export default PeopleNearby;