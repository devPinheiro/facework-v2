import { Formik } from 'formik'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'

// components
// import Footer from '@components/Footer'

import Button from '@components/Button'
import Textbox from '@components/Textbox'

const LoginForm = ({ initialValues, onSubmit, validationSchema, confirmEmail }) => (
    <Fragment>
        <div className="bg-image">
            <div className="container mx-auto flex text-white justify-center ">
                <div className="max-w-md-1/2 mx-3 my-8 w-full">
                    <h1 className="text-center font-primary mt-16 mb-8 font-semibold text-6xl">
                        facework
                    </h1>
                    <div className="bg-white-900 shadow-md pb-4 pt-8 pl-4 pr-4 md:pl-16 md:pr-16 rounded-lg w-full bg-form-transparent">
                       { confirmEmail ? (
                       <div>
                            <h2 className="text-center font-primary font-semibold mb-8">
                            Confirm your email
                        </h2>
                        <p className="text-sm">
                            We have sent you a confirmation mail. Kindly check it out to activate your account
                        </p>
                       </div>) : (<><h2 className="text-center font-primary font-semibold mb-8">
                            Sign In
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
                                        error={
                                            touched.password && errors.password
                                        }
                                    />

                                    <Button
                                        type="submit"
                                        loading={isSubmitting}
                                        data-testid="submit-button"
                                    >
                                        Sign In
                                    </Button>
                                    <div className="text-center md:my-12 my-4">
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
                       </>)}  </div>
                </div>
            </div>

            <div className="mb-10 text-white flex justify-center pl-4 pr-4">
                <div>
                    By contunuing, you agree to the Facework&apos;s
                    {
                        <Link className="text-orange no-underline">
                            {' '}
                            Conditions of Use
                        </Link>
                    }{' '}
                    and
                    {
                        <Link className="text-orange no-underline">
                            {' '}
                            Privacy Policy
                        </Link>
                    }
                </div>
            </div>
            <div className="mt-2 text-white flex justify-center pb-32">
                <div className="">
                    New to facework?
                    {
                        <Link
                            to="/auth/register"
                            className="text-orange no-underline"
                        >
                            {' '}
                            Sign Up Now
                        </Link>
                    }
                </div>
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
