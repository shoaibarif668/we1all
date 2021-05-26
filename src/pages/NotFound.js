import React from "react"
import Footer from "../components/LayoutComponent/Footer"
import Header from "../components/LayoutComponent/Header"
import notfound from "../images/404.png"
const NotFound =()=>{
    return(
        <>
        <Header/>
        <div className="error-page">
      <div className="error-content">
        <div className="container">
          <img src={notfound} alt="notfound" className="img-responsive" />
          <div className="error-message">
          	<h1 className="error-title">Whoops!</h1>
          	<p>Looks like you are lost. But don't worry there is plenty to see!!</p>
          </div>
          <form className="search-form">
            <div className="form-group">
              <label for="search_content">Search Content!</label>
              <input id="search_content" type="text" className="form-control" value="" placeholder="Search what you want to find..."/>
            </div>
            <button type="submit" className="btn btn-primary">Search Now!</button>
          </form>
        </div>
    	</div>
    </div>
    <Footer/>
        </>
    )
}
export default NotFound;