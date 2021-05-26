//General
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
//CSS
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/ionicons.min.css";
import "./css/font-awesome.min.css";
// import "./css/jquery.scrollbar.css"
// import "./css/jquery.mCustomScrollbar.css"
// import "./css/emoji.css"

//Pages
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import UserRegistration from "./pages/UserRegistration";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import EditProfile from "./pages/EditProfile";
import EditProfileInterest from "./pages/EditProfileInterest";
import EditProfilePassword from "./pages/EditProfilePassword";
import EditProfileSettings from "./pages/EditProfileSettings";
import EditProfileWork from "./pages/EditProfileWork";
import Timeline from "./pages/Timeline";
import TimelineAbout from "./pages/TimelineAbout";
import TimelineAlbum from "./pages/TimelineAlbum";
import TimelineFriends from "./pages/TimelineFriends";
import NewsFeed from "./pages/NewsFeed";
import NewsFeedPeople from "./pages/NewsFeedPeople";
import NewsFeedFriends from "./pages/NewsFeedFriends";
import NewsFeedMedia from "./pages/NewsFeedMedia";
import NewsFeedImages from "./pages/NewsFeedImages";
import NewsFeedMessages from "./pages/NewsFeedMessages";
function App() {


  return (
    <>
    <ScrollToTop/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/register" component={UserRegistration} />
      <Route exact path="/faq" component={FAQ}/>

      <Route exact path="/edit-profile" component={EditProfile}/>
      <Route exact path="/edit-profile-interests" component={EditProfileInterest}/>
      <Route exact path="/edit-profile-password" component={EditProfilePassword}/>
      <Route exact path="/edit-profile-settings" component={EditProfileSettings}/>
      <Route exact path="/edit-profile-work" component={EditProfileWork}/>

      <Route exact path="/timeline" component={Timeline}/>
      <Route exact path="/timeline-about" component={TimelineAbout}/>
      <Route exact path="/timeline-album" component={TimelineAlbum}/>
      <Route exact path="/timeline-friends" component={TimelineFriends}/>

      <Route exact path="/newsfeed" component={NewsFeed}/>
      <Route exact path="/newsfeed-people-nearby" component={NewsFeedPeople}/>
      <Route exact path="/newsfeed-friends" component={NewsFeedFriends}/>
      <Route exact path="/newsfeed-videos" component={NewsFeedMedia}/>
      <Route exact path="/newsfeed-images" component={NewsFeedImages}/>
      <Route exact path="/newsfeed-messages" component={NewsFeedMessages}/>
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

export default App;
