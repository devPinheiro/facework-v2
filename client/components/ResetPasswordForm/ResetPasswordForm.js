import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

// components
import Button from '@components/Button'
import Textbox from '@components/Textbox'

const ResetPasswordForm = ({ initialValues, onSubmit, validationSchema }) => (
    <Fragment>
         <div className="bg-image">
            <div className="container mx-auto flex text-white justify-center ">
                <div className="max-w-md-1/2 mx-3 my-8 w-full">
                    <h1 className="text-center font-primary mt-16 mb-8 font-semibold text-6xl">
                        facework
                    </h1>
                    <div className="bg-white-900 shadow-md pb-8 pt-8 pl-4 pr-4 md:pl-16 md:pr-16 rounded-lg w-full bg-form-transparent">
                    
                            <h2 className="text-center font-primary font-semibold mb-8">
                            Change Your Password
                        </h2>
              
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Textbox
                                    type="email"
                                    name="email"
                                    onBlur={handleBlur}
                                    value={values.email}
                                    onChange={handleChange}
                                    data-testid={'email-field'}
                                    placeholder={'Enter your email'}
                                    error={touched.email && errors.email}
                                />
                                <Textbox
                                    type="password"
                                    name="password"
                                    onBlur={handleBlur}
                                    value={values.password}
                                    onChange={handleChange}
                                    data-testid={'password-field'}
                                    placeholder={'Enter your new password'}
                                    error={touched.password && errors.password}
                                />
                                <Button
                                    type="submit"
                                    loading={isSubmitting}
                                    data-testid="submit-button"
                                >
                                    Reset Password
                                </Button>
                            </form>
                        )}
                    </Formik>
                </div>
                </div>
                </div>
                </div>
            
    </Fragment>
)

ResetPasswordForm.propTypes = {
    initialValues: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
        token: PropTypes.string
    }).isRequired,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
}

export default ResetPasswordForm
