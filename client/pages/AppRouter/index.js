import React from "react";
import { Provider, useSelector } from "react-redux";
import Loadable from 'react-loadable'
import { withRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

// components
import Flash from '@components/Flash'
import PageLoader from '@components/PageLoader'
import NavBar from '@components/Nav/NavBar'
import Jobs from '@pages/Jobs'
import PostFeed from '@pages/PostFeeds'
import EmailConfirmationPage from '@pages/EmailConfirmation'
import LoginPage from '@pages/Login'
import PrivateRoute from "./PrivateRoute";
import Messenger from "../../components/Messenger";

const HomePage = Loadable({
    loader: () => import('@pages/Home'),
    loading: PageLoader
})


const RegisterPage = Loadable({
    loader: () => import('@pages/Register'),
    loading: PageLoader
})

const ResetPasswordPage = Loadable({
    loader: () => import('@pages/ResetPassword'),
    loading: PageLoader
})

const ForgotPasswordPage = Loadable({
    loader: () => import('@pages/ForgotPassword'),
    loading: PageLoader
})

const UserProfile = Loadable({
    loader: () => import('@pages/UserProfile'),
    loading: PageLoader
})




const Main = withRouter(({ location }) => {

    const flash = useSelector(state => state.flash)
    
    return (
<>
        {["/auth/login", "/auth/signup", "/auth/confirm/mail/:token", "/auth/passwords/reset/:token", "/auth/passwords/email"].includes(
          location.pathname
        ) ||
          (<div className="w-full pt-5 m-auto max-w-xl flex ">
          <NavBar />
      </div>)}


                <div className="page">
                    <Flash messages={flash.messages} />
                    
                    
                    <Switch>
                        
                        <Route exact={true} path={'/'} component={HomePage} />
                        <Route
                            exact={true}
                            path={'/auth/login'}
                            component={LoginPage}
                        />
                        <Route
                            exact={true}
                            path={'/auth/register'}
                            component={RegisterPage}
                        />
                        <Route
                            exact={true}
                            path={'/auth/passwords/reset/:token'}
                            component={ResetPasswordPage}
                        />
                        <Route
                            exact={true}
                            path={'/auth/passwords/email'}
                            component={ForgotPasswordPage}
                        />
                        <Route
                            exact={true}
                            path={'/auth/emails/confirm/:token'}
                            component={EmailConfirmationPage}
                        />
                        <Route 
                            exact
                            path={'/messages'}
                            component={Messenger}
                        />
                        <AnimatePresence exitBeforeEnter initial={false}>
                           
                            <PrivateRoute
                                exact={true}
                                path={'/feeds'}
                                component={PostFeed}
                                key="feeds"
                            />
                            <PrivateRoute
                                exact={true}
                                path={'/feeds/p/:slug/:title'}
                                component={PostFeed} 
                                key="postModal"
                            />
                            <PrivateRoute
                                exact={true}
                                path={'/profile'}
                                component={UserProfile}
                                key="userProfile"
                            />
                            <PrivateRoute
                                exact={true}
                                path={'/profile/:slug/p/:id/:identifier'}
                                component={UserProfile}
                                key="userProfilePost"
                            />
                            <Route
                                exact
                                path={'/jobs'}
                                component={Jobs}
                                key="jobs"
                            />

                        </AnimatePresence>

                            
                    </Switch>
                </div>
        </>
   
    );
  });
  
  export default Main;