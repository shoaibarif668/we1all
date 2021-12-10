import React ,{Suspense} from "react"
import { Route,Redirect } from 'react-router-dom'; 
const Header = React.lazy(() => import('../components/LayoutComponent/GeneralHeader'))
const Footer =  React.lazy(() => import('../components/LayoutComponent/Footer'))


const HomeLayout = ({children}) => {
    return (
        <>
        
         <Suspense  fallback={ 
      <div className="loader-wrapper">
      <div className="loader__image__wrapper">
        <div className="loader"></div>
      </div>
    </div>}>
          <Header/>
            <main>
                {children}
            </main>
          <Footer/>
          </Suspense>
        </>
    )
}
const homeLayoutRoute = ({isAuth,component: Component, ...rest}) => {  
    isAuth=localStorage.getItem('userauth');

    return ( 
      <> 
      <Route {...rest} render={matchProps => (  
          isAuth ? (
        <HomeLayout>  
            <Component {...matchProps} />  
        </HomeLayout>  
          ) : <Redirect to={{pathname:"/register", state:{from:matchProps.location}}}/>
      )} />  
      </>
    )  
  };  

export default homeLayoutRoute;