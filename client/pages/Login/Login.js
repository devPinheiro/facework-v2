import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { flashMessage } from 'redux-flash'
import LoginForm from '@components/LoginForm'
import Footer from '@components/Footer'
import React, { Component, Fragment } from 'react'
import { postLogin } from '@client/store/actions/auth'
import { LoginSchema } from '@client/validation-schemas'
import './index.css'

class LoginPage extends Component {
    /**
     * Initialize component state
     *
     * @var {Object}
     */
    state = {
        initialValues: {
            email: '',
            password: ''
        }
    }

    /**
     * Define component proptypes
     *
     * @var {Object}
     */
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        })
    }

    /**
     * The validation schema for login screen
     *
     * @var {Object}
     */
    LoginSchema = LoginSchema

    /**
     * Handle form submit
     *
     * @return null
     */
    onSubmit = (data, { resetForm, setSubmitting, setErrors }) => {
        const { dispatch, history } = this.props

        dispatch(postLogin(data))
            .then(response => {
                localStorage.setItem(
                    'auth',
                    JSON.stringify(response.payload.data.data)
                )

                history.push('/')
                dispatch(flashMessage('Successfully logged in.'))
            })
            .catch(({ error }) => {
                const { message } = error.response.data
                setSubmitting(false)
                setErrors({
                    email:
                        message === 'Unauthorized'
                            ? 'Email or Password is invalid'
                            : message
                })
                dispatch(
                    flashMessage(
                        message === 'Unauthorized'
                            ? 'Email or Password is invalid'
                            : message,
                        { isError: true }
                    )
                )
            })
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Login</title>
                </Helmet>

                <LoginForm
                    {...this.props}
                    onSubmit={this.onSubmit}
                    validate={this.handleValidation}
                    validationSchema={this.LoginSchema}
                    initialValues={this.state.initialValues}
                />

                <Footer />
            </Fragment>
        )
    }
}

export default connect()(LoginPage)
