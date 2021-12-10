import React ,{Suspense} from "react"
import { Route } from 'react-router-dom'; 
const Header = React.lazy(() => import('../components/LayoutComponent/Header'))
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
const homeLayoutRoute = ({component: Component, ...rest}) => {  
  localStorage.clear();


    return ( 
      <> 
      <Route {...rest} render={matchProps => (  
        <HomeLayout>  
            <Component {...matchProps} />  
        </HomeLayout>  
      )} />  
      </>
    )  
  };  

export default homeLayoutRoute;