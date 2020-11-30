import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'
import React, { Component } from 'react'
import { flashMessage } from 'redux-flash'
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// components
import Flash from '@components/Flash'
// import Topbar from '@components/Topbar'
import PageLoader from '@components/PageLoader'
import SendEmailConfirm from '@components/SendEmailConfirm'
import NavBar from '@components/Nav/NavBar'
import Jobs from '@pages/Jobs'

// css
import '@client/styles/main.css'
// import '@client/'

// actions
import { authLogout, postResendEmailConfirm } from '@client/store/actions/auth'

const HomePage = Loadable({
    loader: () => import('@pages/Home'),
    loading: PageLoader
})

const LoginPage = Loadable({
    loader: () => import('@pages/Login'),
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

const EmailConfirmationPage = Loadable({
    loader: () => import('@pages/EmailConfirmation'),
    loading: PageLoader
})

const PostFeed = Loadable({
    loader: () => import('@pages/PostFeeds'),
    loading: PageLoader
})

const UserProfile = Loadable({
    loader: () => import('@pages/UserProfile'),
    loading: PageLoader
})



export class Main extends Component {
    /**
     * Define prop types for this component
     *
     *@var {Object}
     */
    static propTypes = {
        flash: PropTypes.shape({
            messages: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    message: PropTypes.string,
                    isError: PropTypes.bool
                })
            )
        }),
        user: PropTypes.shape({}),
        dispatch: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired
    }

    /**
     * Logout a user
     *
     * @return {null}
     */
    logout = () => {
        const { dispatch } = this.props
        localStorage.removeItem('auth')

        dispatch(authLogout())
        dispatch(flashMessage('Successfully logged out.'))
    }


    /**
     * Render the Main component
     *
     * @return {JSX}
     */
    render() {
        const { flash, isAuthenticated, user } = this.props

        return (
            <BrowserRouter>
                <div className="page">
                    <Flash messages={flash.messages} />
                    
                    {/* <Topbar
                        user={user}
                        logout={this.logout}
                        isAuthenticated={isAuthenticated}
                    /> */}
                    {
                                <div className="w-full pt-5 m-auto max-w-xl flex ">
                                    <NavBar />
                                </div>
                            }
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
                        <AnimatePresence exitBeforeEnter initial={false}>
                            <Route
                                exact={true}
                                path={'/feeds'}
                                component={PostFeed}
                                key="feeds"
                            />
                            <Route
                                exact={true}
                                path={'/feeds/p/:slug/:title'}
                                component={PostFeed} 
                                key="postModal"
                            />
                            <Route
                                exact={true}
                                path={'/profile/:slug'}
                                component={UserProfile}
                                key="userProfile"
                            />
                            <Route
                                exact={true}
                                path={'/profile/:slug/p/:id'}
                                component={UserProfile}
                                key="userProfilePost"
                            />
                            <Route
                                exact={true}
                                path={'/jobs'}
                                component={Jobs}
                                key="jobs"
                            />

                        </AnimatePresence>

                            
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default connect(state => ({
    user: state.auth.user,
    flash: state.flash,
    isAuthenticated: !!state.auth.user
}))(Main)
