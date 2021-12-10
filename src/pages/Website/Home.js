import React from "react"
import HomeBanner from "../../components/HomeComponent/HomeBanner"
import HomeDownload from "../../components/HomeComponent/HomeDownload"
import HomeFacts from "../../components/HomeComponent/HomeFacts"
import HomeFeatures from "../../components/HomeComponent/HomeFeatures"
import HomeLiveFeed from "../../components/HomeComponent/HomeLiveFeed"
const Home = () =>{

    return(
        <>
        <HomeBanner/>
        <HomeFeatures/>
        <HomeDownload/>
        <div className="img-divider hidden-sm hidden-xs"></div>
        <HomeFacts/>
        <HomeLiveFeed/>
        </>
    )
}
export default Home;