import { Formik } from 'formik'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'

// components
// import Footer from '@components/Footer'

import Button from '@components/Button'
import Textbox from '@components/Textbox'

const LoginForm = ({ initialValues, onSubmit, validationSchema }) => (
    <Fragment>
        <div className="container mx-auto flex text-white justify-center">
            <div className="max-w-md-1/2 mx-3 my-8 w-full">
                <h1 className="text-center font-primary mb-12 font-semibold text-8xl ">
                    facework
                </h1>
                <div className="bg-white-900 shadow-md  p-8 rounded-lg w-full">
                    <h4 className="text-center font-primary font-semibold mb-4">
                        Sign In
                    </h4>
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            isSubmitting,
                            handleBlur,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Textbox
                                    type="email"
                                    name="email"
                                    label="Email"
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
                                    label="Password"
                                    onBlur={handleBlur}
                                    value={values.password}
                                    onChange={handleChange}
                                    data-testid={'password-field'}
                                    placeholder={'Enter your password'}
                                    error={touched.password && errors.password}
                                />

                                <Button
                                    type="submit"
                                    loading={isSubmitting}
                                    data-testid="submit-button"
                                >
                                    Sign In
                                </Button>
                                <div className="text-center my-12">
                                    <Link
                                        to="/auth/passwords/email"
                                        className="font-primary text-white no-underline"
                                    >
                                        Forgot Password ?
                                    </Link>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
        
        <div className="mb-10 text-white flex justify-center">
            <div>By contunuing, you agree to the MasterBuilder's
                {<Link className="text-orange no-underline"> Conditions of Use</Link>} and 
                {<Link className="text-orange no-underline"> Privacy Policy</Link>}
            </div>
        </div>
        <div className="mt-2 text-white flex justify-center">
            <div className="">New to facework? 
                {<Link to="/auth/register" className="text-orange no-underline"> Sign Up Now</Link>}
            </div>
        </div>
        
    </Fragment>
)

LoginForm.propTypes = {
    initialValues: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string
    }).isRequired,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm
