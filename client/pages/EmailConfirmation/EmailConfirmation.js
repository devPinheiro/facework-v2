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
export class EmailConfirmationPage extends Component {
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
                localStorage.setItem(
                    'auth',
                    JSON.stringify(response.payload.data.data)
                )
                history.push('/')

                dispatch(flashMessage('Email confirmed successfully.'))
            })
            .catch(() => {

                dispatch(
                    flashMessage('Error confirming your email.', { isError: true })
                )
            })
    }

    render() {
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
                                <p>Please wait a moment while we confirm your email. Thank you</p> 
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
