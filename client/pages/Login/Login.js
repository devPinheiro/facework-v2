import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { flashMessage } from 'redux-flash'
import { ToastProvider, useToasts } from 'react-toast-notifications'


import LoginForm from '@components/LoginForm'
import Footer from '@components/Footer'
import React, { PureComponent, Fragment } from 'react'
import { postLogin } from '@client/store/actions/auth'
import { LoginSchema } from '@client/validation-schemas'


import './index.css'
import { setCurrentUser } from '../../store/actions/auth'
import jwtDecode from 'jwt-decode'
import { store } from '../../store'

class LoginPage extends PureComponent {
    /**
     * Initialize component state
     *
     * @var {Object}
     */
    state = {
        initialValues: {
            email: '',
            password: ''
        },
        confirmEmail: false,
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
    onSubmit = async (data, { resetForm, setSubmitting, setErrors }) => {
        const { dispatch, history } = this.props

        try {
            const response = await dispatch(postLogin(data));
           
            if(response.payload.data.access_token){
                localStorage.setItem(
                    'auth',
                    JSON.stringify(response.payload.data.access_token)
                )
            
            }
    
                await dispatch(setCurrentUser(response.payload.data.data))
                
                
                await dispatch(flashMessage('Successfully logged in.'))
               
                history.push('/feeds')
           
        } catch ({ error }) {
            console.log(error);
            const { message } = error.response.data
                setSubmitting(false)
                setErrors({
                    email:
                        message === 'Unauthorized'
                            ? 'Email or Password is invalid'
                            : message
                })
                message === 'Unauthorized'
                ? 
                dispatch(
                    flashMessage(
                       'Email or Password is invalid',
                            { isError: true }
                            
                    )
                ) : dispatch(flashMessage(message,
                    { isError: false }))
                this.setState({confirmEmail: message !== 'Unauthorized'})
        }

    }

    render() {
        const { confirmEmail } = this.state
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
                    confirmEmail={confirmEmail}
                />
                <Footer />
            </Fragment>
        )
    }
}


export default connect()(LoginPage)
