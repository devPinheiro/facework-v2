import React from 'react'
import PropTypes from 'prop-types'
import Formik from 'formik';


import Modal from '../Modal'
import ErrorBoundary from '../ErrorBoundary'
i

const EditProfileModal = ({ modalVisibility, setModalVisibility }) => {
    return (
        <Modal modalVisibility={modalVisibility}>
            <ErrorBoundary>
            <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
                 <div className="md:flex w-full border-none">
                 <Formik onSubmit={onSubmit}
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
                                        label="Full Name"
                                        onBlur={handleBlur}
                                        value={values.name}
                                        onChange={handleChange}
                                        data-testid={'name-field'}
                                        // placeholder={'Enter your name'}
                                        error={touched.name && errors.name}
                                    />
                                    <Textbox
                                        type="email"
                                        label="Email"
                                        onBlur={handleBlur}
                                        value={values.email}
                                        onChange={handleChange}
                                        data-testid={'email-field'}
                                        // placeholder={'Enter your email'}
                                        error={touched.email && errors.email}
                                    />
                                    <Textbox
                                        type="password"
                                        label="Password"
                                        onBlur={handleBlur}
                                        value={values.password}
                                        onChange={handleChange}
                                        data-testid={'password-field'}
                                        // placeholder={'Enter your password'}
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
            </ErrorBoundary>
        </Modal>
    )
}

EditProfileModal.propTypes = {

}

export default EditProfileModal
