import { Formik } from 'formik'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'

// components
import Button from '@components/Button'
import Textbox from '@components/Textbox'

const RegisterForm = ({ initialValues, onSubmit, validationSchema }) => (
    <Fragment>
        <div className="container mx-auto flex justify-center">
            <div className="max-w-md-1/2 mx-3 my-12 w-full">
                <h1 className="text-center mb-12 font-primary font-semibold text-white">
                    facework
                </h1>
                <div className="bg-white-600 shadow-md p-16 rounded w-full">
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Textbox
                                    type="name"
                                    name="name"
                                    onBlur={handleBlur}
                                    value={values.name}
                                    onChange={handleChange}
                                    data-testid={'name-field'}
                                    placeholder={'Enter your name'}
                                    error={touched.name && errors.name}
                                />
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
                                    placeholder={'Enter your password'}
                                    error={touched.password && errors.password}
                                />
                                <Button
                                    type="submit"
                                    loading={isSubmitting}
                                    data-testid="submit-button"
                                >
                                    Submit
                                </Button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
        <div className="mb-10 text-white flex justify-center">
            <div>
                By contunuing, you agree to the MasterBuilder's
                {
                    <Link className="text-orange no-underline" to="/auth/login">
                        Conditions of Use
                    </Link>
                }{' '}
                and
                {
                    <Link className="text-orange no-underline" to="/auth/login">
                        {' '}
                        Privacy Policy
                    </Link>
                }
            </div>
        </div>
        <div className="mt-2 text-white flex justify-center">
            <div className="">
                Already have an account?
                {
                    <Link to="/auth/login" className="text-orange no-underline">
                        {' '}
                        Sign in Now
                    </Link>
                }
            </div>
        </div>
    </Fragment>
)

RegisterForm.propTypes = {
    initialValues: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    }).isRequired,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
}

export default RegisterForm
