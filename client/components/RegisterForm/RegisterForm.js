import { Formik } from 'formik'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'

// components
import Button from '@components/Button'
import Textbox from '@components/Textbox'

const RegisterForm = ({ initialValues, onSubmit, validationSchema }) => (
    <Fragment>
        <div className="bg-image">
            <div className="container mx-auto flex text-white justify-center ">
                <div className="max-w-md-1/2 mx-3 my-8 w-full">
                    <h1 className="text-center font-primary mt-16 mb-8 font-semibold text-6xl">
                        facework
                    </h1>
                    <div className="bg-white-900 shadow-md pb-8 pt-8 pl-16 pr-16 rounded-lg w-full bg-form-transparent">
                        <h2 className="text-center font-primary font-semibold mb-8">
                            Register
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
                                        error={
                                            touched.password && errors.password
                                        }
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
                    By contunuing, you agree to the Facework&apos;s
                    {
                        <Link
                            className="text-orange no-underline"
                            to="/auth/login"
                        >
                            Conditions of Use
                        </Link>
                    }{' '}
                    and
                    {
                        <Link
                            className="text-orange no-underline"
                            to="/auth/login"
                        >
                            {' '}
                            Privacy Policy
                        </Link>
                    }
                </div>
            </div>
            <div className="mt-2 text-white flex justify-center pb-32">
                <div className="">
                    Already have an account?
                    {
                        <Link
                            to="/auth/login"
                            className="text-orange no-underline"
                        >
                            {' '}
                            Sign in Now
                        </Link>
                    }
                </div>
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
