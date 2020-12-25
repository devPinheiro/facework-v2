import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { flashMessage } from 'redux-flash'
import React, { Component, Fragment } from 'react'

// actions
import { postEmailConfirm } from '@client/store/actions/auth'

// components
import EmailConfirmationLoader from '@components/EmailConfirmationLoader'

import './index.css'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { setAuthToken } from '../../store/Axios'
import { store } from '../../store'
import { setCurrentUser } from '../../store/actions/auth'
export class EmailConfirmationPage extends Component {
    state = {
        alert: ''
    }
    /**
     * The prop types for Email Confirmation Page
     *
     * @var {Object}
     */
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                token: PropTypes.string.isRequired
            })
        }),
        dispatch: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        })
    }
    /**
     * Trigger email confirmation action once page mounts
     *
     * @return {null}
     */
    componentDidMount() {
        const {
            match: {
                params: { token }
            },
            dispatch,
            history
        } = this.props

        dispatch(postEmailConfirm(token))
            .then(response => {
               
                if(response.payload.data.access_token){
                    localStorage.setItem('auth',JSON.stringify(response.payload.data.access_token))
                    setAuthToken(localStorage.auth)            
                    
                    dispatch(setCurrentUser(response.payload.data.data))
                   
                    
                    dispatch(flashMessage('Email confirmed successfully.'))
                   

                    history.push('/feeds')
                }else{
                    this.setState({alert: response.payload.data.message})
                    dispatch(flashMessage(response.payload.data.message))

                    }
            })
            .catch(err => {
                if(err.response){
                    dispatch(
                        flashMessage('Error confirming your email.', { isError: true })
                    )
                }
                
            })
    }

    render() {

        const { alert } = this.state;
        return (
            <Fragment>
                <Helmet>
                    <title>Email confirmation</title>
                </Helmet>
                <div className="bg-image">
                    <div className="container mx-auto flex text-white justify-center h-screen">
                        <div className="max-w-md-1/2 mx-3 my-8 w-full">
                            <h1 className="text-center font-primary mt-16 mb-8 font-semibold text-6xl">
                                facework
                            </h1>
                            <div className="bg-white-900 shadow-md pb-4 pt-8 pl-4 pr-4 md:pl-16 md:pr-16 rounded-lg w-full bg-form-transparent">
                            
                            <div>
                                    <h2 className="text-center font-primary font-semibold mb-8">
                                    Activating Your Account
                                </h2>
                               {alert ? (<p>{alert} <Link className="text-white font-semibold text-base" to='/auth/login'>here</Link></p>): (<p>Please wait a moment while we confirm your email. Thank you</p>)} 
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </Fragment>
        )
    }
}

export default connect()(EmailConfirmationPage)
