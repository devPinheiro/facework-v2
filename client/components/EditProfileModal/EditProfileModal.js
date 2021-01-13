import React, { useState } from 'react'
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
    validationSchema,
    setModalVisibility
}) => {

    const [selectedImage, setSelectedImage] = useState('')
    return (
        <Modal modalVisibility={modalVisibility}>

            
            <ErrorBoundary>
                <div className="modal-container-active modal-container">
                <div className="w-full px-4 py-4 border-grey-lightest border-b-2 ">
                        <div className="flex flex-row justify-between">
                            <p className="md:text-xl font-thin text-black pt-2">
                                Edit Profile
                            </p>
                            <span
                                className="justify-center px-2 py-2 rounded-full cursor-pointer"
                                onClick={() =>
                                    setModalVisibility(!modalVisibility)
                                }
                            >
                                ✖️
                            </span>
                        </div>
                    </div>
                    <div className="md:flex w-full border-none flex-col justify-center px-10 py-12">
                        <div className="flex justify-center items-center pb-16">
                           <img src={selectedImage || "https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80"} alt="avatar" className="block w-32 h-32 rounded-full" />
                        </div>
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
                                                type="text"
                                                name="name"
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
                                                name="email"
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
                                                type="text"
                                                name="state"
                                                label="City"
                                                onBlur={handleBlur}
                                                value={values.state}
                                                onChange={handleChange}
                                                data-testid={'state-field'}
                                               
                                                error={
                                                    touched.state && errors.state
                                                }
                                            />
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <Textbox
                                                type="number"
                                                name="phone"
                                                label="Phone"
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                onChange={handleChange}
                                                data-testid={'phone-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.phone &&
                                                    errors.phone
                                                }
                                            />
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="text"
                                                name="service"
                                                label="Occupation"
                                                onBlur={handleBlur}
                                                value={values.service}
                                                onChange={handleChange}
                                                data-testid={'service-field'}
                                                // placeholder={'Enter your name'}
                                                error={
                                                    touched.service && errors.service
                                                }
                                            />
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <Textbox
                                                type="text"
                                                name="address"
                                                label="Address"
                                                onBlur={handleBlur}
                                                value={values.address}
                                                onChange={handleChange}
                                                data-testid={'address-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.address &&
                                                    errors.address
                                                }
                                            />
                                        </div>
                                        
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <TextArea
                                                name="about"
                                                type="textarea"
                                                col="10"
                                                row="10"
                                                label="About "
                                                onBlur={handleBlur}
                                                value={values.about}
                                                onChange={handleChange}
                                                data-testid={'about-field'}
                                                // placeholder={'Enter your email'}
                                                error={
                                                    touched.about &&
                                                    errors.about
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="url"
                                                name="facebook"
                                                label="Facebook"
                                                onBlur={handleBlur}
                                                value={values.facebook}
                                                onChange={handleChange}
                                                data-testid={'facebook-field'}
                                                placeholder={'https://facebook/your-handle'}
                                                error={
                                                    touched.facebook &&
                                                    errors.facebook
                                                }
                                            />{' '}
                                        </div>
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="url"
                                                name="twitter"
                                                label="Twitter"
                                                onBlur={handleBlur}
                                                value={values.twitter}
                                                onChange={handleChange}
                                                data-testid={'twitter-field'}
                                                placeholder={'https://twitter/your-handle'}
                                                error={
                                                    touched.twitter &&
                                                    errors.twitter
                                                }
                                            />
                                        </div>
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="url"
                                                name="instagram"
                                                label="Instagram"
                                                onBlur={handleBlur}
                                                value={values.instagram}
                                                onChange={handleChange}
                                                data-testid={'instagram-field'}
                                                placeholder={'https://instagram/your-profile'}
                                                error={
                                                    touched.instagram &&
                                                    errors.instagram
                                                }
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        loading={isSubmitting}
                                        data-testid="submit-button"
                                    >
                                        Update Profile
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
