import React from 'react'
import '../../styles/main.css'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

// components
import Button from '@components/Button'
import Textbox from '@components/Textbox'

const CreatePostModal = ({ postModalVisibility, setPostModalVisibility, onSubmit, initialValues, validationSchema }) => {
  return (
    <div className={ `${postModalVisibility ? 'modal-cover modal-cover-active ' : 'modal-container'}`} onClick={() => setPostModalVisibility(!postModalVisibility)}>
      <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
            <div className="md:flex w-full border-none">
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
      </div>
  ) 
}

export default React.memo(CreatePostModal);
