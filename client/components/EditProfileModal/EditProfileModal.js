import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import {FiCamera} from 'react-icons/fi'

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
    setModalVisibility,
    serverError
}) => {

    const [selectedImage, setSelectedImage] = useState('')
    const [pictureError, setPictureError] = useState('')
    const imageRef = useRef();

    return (
        <Modal modalVisibility={modalVisibility}>

            
            <ErrorBoundary>
                <div className="modal-container-active modal-container">
                <div className="w-full px-4 py-4 border-grey-lightest border-b-2 ">
                        <div className="flex flex-row justify-between">
                            <p className="md:text-xl text-black pt-2">
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
                    {serverError && <p className="pb-4 text-red-light text-xs md:text-sm">{serverError}</p>}                                   
                    {pictureError && <p className=" text-red-light text-xs md:text-sm">{pictureError}</p>}                                   

                        <div className="flex justify-center items-center pb-16">
                           <img onClick={() => imageRef.current.click()} src={selectedImage || initialValues.image} alt="avatar" className="block w-32 h-32 rounded-full border border-grey-lightest" />
                           <div className="customPositionCamera  border border-grey-lightest rounded-full bg-white flex justify-center items-center"><FiCamera className="mx-1 my-1 w-4 h-4 " onClick={() => imageRef.current.click()}  /></div>
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
                                handleSubmit,
                                setFieldValue,
                            }) => (
                                <form onSubmit={handleSubmit} className="">

                                    <div className="flex flex-wrap -mx-3 mb-6">

                                    <input
                                        type="file"
                                        ref={imageRef}
                                        className="hidden"
                                        onChange={e => {
                                            
                                            setPictureError('')
                                            const files = e.target.files;
    
                                            //check if file exist
                                            if (files && files[0]) {
                                              // check if file type is any image format
                                        
                                              /* istanbul ignore next */
                                              if (files[0].size > 1028643) {
                                                /* istanbul ignore next */
                                                setPictureError('Please select an image less than 1mb.');
                                              }else {
                                                setFieldValue('image', e.currentTarget.files[0])
                                                // initializes file reader
                                                /* istanbul ignore next */
                                                const reader = new FileReader();
                                                /* istanbul ignore next */
                                                reader.onload = e => {
                                                  // extract the image file and set it to state
                                                  /* istanbul ignore next */
                                                  setSelectedImage(e.target.result);
                                                };
                                                /* istanbul ignore next */
                                                reader.readAsDataURL(files[0]);
                                              }
                                             
                                            }
                                        }}
                                        accept="image/png, image/jpeg"
                                        />
                                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="text"
                                                name="name"
                                                label="Full Name"
                                                onBlur={handleBlur}
                                                value={values.name || initialValues.name}
                                                onChange={handleChange}
                                                data-testid={'name-field'}
                                                // placeholder={'Enter your name'}
                                                error={
                                                    touched.name && errors.name
                                                }
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <Textbox
                                                type="email"
                                                name="email"
                                                label="Email"
                                                onBlur={handleBlur}
                                                value={values.email || initialValues.email}
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
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="text"
                                                name="state"
                                                label="City"
                                                onBlur={handleBlur}
                                                value={values.state || initialValues.state}
                                                onChange={handleChange}
                                                data-testid={'state-field'}
                                               
                                                error={
                                                    touched.state && errors.state
                                                }
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <Textbox
                                                type="text"
                                                name="phone"
                                                label="Phone"
                                                onBlur={handleBlur}
                                                value={values.phone || initialValues.phone}
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
                                    
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="text"
                                                name="service"
                                                label="Occupation"
                                                onBlur={handleBlur}
                                                value={values.service || initialValues.service}
                                                onChange={handleChange}
                                                data-testid={'service-field'}
                                                // placeholder={'Enter your name'}
                                                error={
                                                    touched.service && errors.service
                                                }
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
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
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <TextArea
                                                name="about"
                                                type="textarea"
                                                col="10"
                                                row="10"
                                                label="About "
                                                onBlur={handleBlur}
                                                value={values.about || initialValues.about}
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
                                    <div className="flex flex-wrap -mx-3 mb-2">
                                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="url"
                                                name="facebook"
                                                label="Facebook"
                                                onBlur={handleBlur}
                                                value={values.facebook || initialValues.facebook}
                                                onChange={handleChange}
                                                data-testid={'facebook-field'}
                                                placeholder={'https://facebook/your-handle'}
                                                error={
                                                    touched.facebook &&
                                                    errors.facebook
                                                }
                                            />{' '}
                                        </div>
                                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="url"
                                                name="twitter"
                                                label="Twitter"
                                                onBlur={handleBlur}
                                                value={values.twitter || initialValues.twitter}
                                                onChange={handleChange}
                                                data-testid={'twitter-field'}
                                                placeholder={'https://twitter/your-handle'}
                                                error={
                                                    touched.twitter &&
                                                    errors.twitter
                                                }
                                            />
                                        </div>
                                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <Textbox
                                                type="url"
                                                name="instagram"
                                                label="Instagram"
                                                onBlur={handleBlur}
                                                value={values.instagram || initialValues.instagram}
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
