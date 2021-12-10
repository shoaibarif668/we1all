//General
import React,{useState, useEffect} from "react"
import { Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";

//Routes
import Layout from "./Layout/Layout"
import LoginLayout from "./Layout/LoginLayout";
import GeneralLayout from "./Layout/GeneralDashboardLayout";
import LandingLayout from "./Layout/LandingDashboardLayout";
import WetubeLayout from "./Layout/WetubeLayout"
import BlogsLayout from "./Layout/BlogsLayout"
import PicturesLayout from "./Layout/PicturesLayout"

//Pages
import Contact from "./pages/Website/Contact";
import NotFound from "./pages/Website/NotFound";
import UserRegistration from "./pages/Login/UserRegistration";
import Home from "./pages/Website/Home";
import FAQ from "./pages/Website/FAQ";
import EditProfile from "./pages/Dashboards/General/EditProfile";
import EditProfileInterest from "./pages/Dashboards/General/EditProfileInterest";
import EditProfilePassword from "./pages/Dashboards/General/EditProfilePassword";
import EditProfileSettings from "./pages/Dashboards/General/EditProfileSettings";
import EditProfileWork from "./pages/Dashboards/General/EditProfileWork";
import Timeline from "./pages/Dashboards/General/Timeline";
import TimelineAbout from "./pages/Dashboards/General/TimelineAbout";
import TimelineAlbum from "./pages/Dashboards/General/TimelineAlbum";
import TimelineFriends from "./pages/Dashboards/General/TimelineFriends";
import NewsFeed from "./pages/Dashboards/General/NewsFeed";
import NewsFeedPeople from "./pages/Dashboards/General/NewsFeedPeople";
import NewsFeedFriends from "./pages/Dashboards/General/NewsFeedFriends";
import NewsFeedMedia from "./pages/Dashboards/General/NewsFeedMedia";
import NewsFeedImages from "./pages/Dashboards/General/NewsFeedImages";
import NewsFeedMessages from "./pages/Dashboards/General/NewsFeedMessages";
import Dashboard from "./pages/Dashboards/LandingDashboard/Dashboard";
import WeTubeDashboard from "./pages/Dashboards/Wetube/Dashboard";
import BlogsDashboard from "./pages/Dashboards/Blogs/Dashboard";
import PicturesDashboard from "./pages/Dashboards/Pictures/Dashboard";
function App() {
  const [isUser,setIsUser] = useState(localStorage.getItem('userauth')) //for dashboard
  const [isAuth,setIsAuth] = useState(isUser);

  const [isUserSignup,setIsUserSignup] = useState(localStorage.getItem('usersignup')) //for student signup
  const [isUserAuth,setIsUserAuth] = useState(isUserSignup)
  useEffect(()=>{
    if(isUser){
      setIsAuth(true)
    }
    else{
      setIsAuth(false)
    }
  },[isUser])
  useEffect(()=>{
    if(isUserSignup){
      setIsAuth(true)
    }
    else{
      setIsAuth(false)
    }
  },[isUserSignup])

  return (
    <>
    <ScrollToTop/>
    <ToastContainer/>
    <Switch>
      <Layout exact path="/" component={Home}/>
      <Layout path="/contact" component={Contact} />
      <Layout path="/faq" component={FAQ}/>

      <LoginLayout path="/register" component={UserRegistration} />

      {/* //Landing Dashboard// */}
      <LandingLayout isAuth={isAuth} path="/dashboard" component={Dashboard} />

      {/* //WeTube Dashboard// */}
      <WetubeLayout isAuth={isAuth} path="/wetube" component={WeTubeDashboard}/>

      {/* //Blogs Dashboard// */}
      <BlogsLayout isAuth={isAuth} path="/blogs" component={BlogsDashboard}/>

      {/* //Pictures Dashboard// */}
      <PicturesLayout isAuth={isAuth} path="/pictures" component={PicturesDashboard}/>

      {/* //General Dashboard// */}
      <GeneralLayout isAuth={isAuth} path="/edit-profile" component={EditProfile}/>
      <GeneralLayout isAuth={isAuth} path="/edit-profile-interests" component={EditProfileInterest}/>
      <GeneralLayout isAuth={isAuth} path="/edit-profile-password" component={EditProfilePassword}/>
      <GeneralLayout isAuth={isAuth} path="/edit-profile-settings" component={EditProfileSettings}/>
      <GeneralLayout isAuth={isAuth} path="/edit-profile-work" component={EditProfileWork}/>

      <GeneralLayout isAuth={isAuth} path="/timeline" component={Timeline}/>
      <GeneralLayout isAuth={isAuth} path="/timeline-about" component={TimelineAbout}/>
      <GeneralLayout isAuth={isAuth} path="/timeline-album" component={TimelineAlbum}/>
      <GeneralLayout isAuth={isAuth} path="/timeline-friends" component={TimelineFriends}/>

      <GeneralLayout isAuth={isAuth} path="/newsfeed" component={NewsFeed}/>
      <GeneralLayout isAuth={isAuth} path="/newsfeed-people-nearby" component={NewsFeedPeople}/>
      <GeneralLayout isAuth={isAuth} path="/newsfeed-friends" component={NewsFeedFriends}/>
      <GeneralLayout isAuth={isAuth} path="/newsfeed-videos" component={NewsFeedMedia}/>
      <GeneralLayout isAuth={isAuth} path="/newsfeed-images" component={NewsFeedImages}/>
      <GeneralLayout isAuth={isAuth} path="/newsfeed-messages" component={NewsFeedMessages}/>
      
      <Layout component={NotFound} />
    </Switch>
    </>
  );
}

export default App;
