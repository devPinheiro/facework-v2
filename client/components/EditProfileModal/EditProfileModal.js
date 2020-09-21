import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

// components
import Button from '@components/Button'
import Textbox from '@components/Textbox'
import TextArea from '@components/TextArea'
import Modal from '../Modal'
import ErrorBoundary from '../ErrorBoundary'

const EditProfileModal = ({
    modalVisibility,
    initialValues,
    onSubmit,
    validationSchema
}) => {
    return (
        <Modal modalVisibility={modalVisibility}>
            <ErrorBoundary>
                <div className="modal-container-active modal-container ">
                    <div className="md:flex w-full border-none justify-center">
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
                                <form onSubmit={handleSubmit} className="">
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="name"
                                                label="Full Name"
                                                onBlur={handleBlur}
                                                value={values.name}
                                                onChange={handleChange}
                                                data-testid={'name-field'}
                                                // placeholder={'Enter your name'}
                                                error={
                                                    touched.name && errors.name
                                                }
                                            />
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <Textbox
                                                type="email"
                                                label="Email"
                                                onBlur={handleBlur}
                                                value={values.email}
                                                onChange={handleChange}
                                                data-testid={'email-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.email &&
                                                    errors.email
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="name"
                                                label="Full Name"
                                                onBlur={handleBlur}
                                                value={values.name}
                                                onChange={handleChange}
                                                data-testid={'name-field'}
                                                // placeholder={'Enter your name'}
                                                error={
                                                    touched.name && errors.name
                                                }
                                            />
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <Textbox
                                                type="email"
                                                label="Email"
                                                onBlur={handleBlur}
                                                value={values.email}
                                                onChange={handleChange}
                                                data-testid={'email-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.email &&
                                                    errors.email
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <TextArea
                                                type="textarea"
                                                row="5"
                                                label="About "
                                                onBlur={handleBlur}
                                                value={values.email}
                                                onChange={handleChange}
                                                data-testid={'email-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.email &&
                                                    errors.email
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="email"
                                                label="Email"
                                                onBlur={handleBlur}
                                                value={values.email}
                                                onChange={handleChange}
                                                data-testid={'email-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.email &&
                                                    errors.email
                                                }
                                            />{' '}
                                        </div>
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="email"
                                                label="Email"
                                                onBlur={handleBlur}
                                                value={values.email}
                                                onChange={handleChange}
                                                data-testid={'email-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.email &&
                                                    errors.email
                                                }
                                            />
                                        </div>
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="email"
                                                label="Email"
                                                onBlur={handleBlur}
                                                value={values.email}
                                                onChange={handleChange}
                                                data-testid={'email-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.email &&
                                                    errors.email
                                                }
                                            />
                                        </div>
                                    </div>

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
            </ErrorBoundary>
        </Modal>
    )
}

EditProfileModal.propTypes = {}

export default EditProfileModal
