import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { flashMessage } from 'redux-flash'
import React, { Component, Fragment } from 'react'
import RegisterForm from '@components/RegisterForm'
import { postRegister } from '@client/store/actions/auth'
import { RegisterSchema } from '@client/validation-schemas'
import Footer from '@components/Footer'
import '../Login/index.css'

export class RegisterPage extends Component {
    /**
     * Initialize component state
     *
     * @var {Object}
     */
    state = {
        initialValues: {
            name: '',
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
    RegisterSchema = RegisterSchema

    /**
     * Handle registration form submit
     *
     * @return null
     */
    onSubmit = async (data, { setSubmitting, setErrors }) => {
        const { dispatch, history } = this.props


        try {
            const response = await dispatch(postRegister(data));
           
            if(response.payload.data.data){
                dispatch(flashMessage('Successfully registered.'))
                this.setState({confirmEmail: true})
            }   
            
            if(response.payload.data.errors){
                        setSubmitting(false)
                        setErrors(response.payload.data.errors)
                        dispatch(
                            flashMessage(response.payload.data.errors.email[0], {
                                isError: true
                            })
                        )
                    }
           
        } catch (error) {
            console.log(error);
            if(error.response.payload.data.errors){
                setSubmitting(false)
                setErrors(response.payload.data.errors)
                dispatch(
                    flashMessage(response.payload.data.errors.email[0], {
                        isError: true
                    })
                )
            }
           
                    // dispatch(
                    //     flashMessage('something went wrong', {
                    //         isError: true
                    //     })
                    // )
        
        }

    }

    render() {
        const { confirmEmail } = this.state;
        return (
            <Fragment>
                <Helmet>
                    <title>Register</title>
                </Helmet>
                <RegisterForm
                    {...this.props}
                    onSubmit={this.onSubmit}
                    validate={this.handleValidation}
                    validationSchema={this.RegisterSchema}
                    initialValues={this.state.initialValues}
                    confirmEmail={confirmEmail}
                />
                <Footer />
            </Fragment>
        )
    }
}

export default connect()(RegisterPage)
