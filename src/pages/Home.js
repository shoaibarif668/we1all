import React from "react"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import HomeBanner from "../components/HomeComponent/HomeBanner"
import HomeDownload from "../components/HomeComponent/HomeDownload"
import HomeFacts from "../components/HomeComponent/HomeFacts"
import HomeFeatures from "../components/HomeComponent/HomeFeatures"
import HomeLiveFeed from "../components/HomeComponent/HomeLiveFeed"
const Home = () =>{

    return(
        <>
        <Header/>
        <HomeBanner/>
        <HomeFeatures/>
        <HomeDownload/>
        <div className="img-divider hidden-sm hidden-xs"></div>
        <HomeFacts/>
        <HomeLiveFeed/>
        <Footer/>
        </>
    )
}
export default Home;