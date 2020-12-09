import React, { useEffect, useRef, useState } from 'react'
import '../../styles/main.css'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

// components
import Button from '@components/Button'
import TextArea from '@components/TextArea'
import Textbox from '@components/Textbox'

// Assets
import Camera from '../../assets/image/camera.svg'
import Video from '../../assets/image/video-camera.svg'
import { useDispatch, useSelector } from 'react-redux'


const CreatePostModal = ({
    postModalVisibility,
    setPostModalVisibility,
    onSubmit,
    initialValues,
    createPostSchema,
    serverError
}) => {
    const [selectedImage, setSelectedImage] = useState('');
    const imageRef = useRef();
    const [pictureError, setPictureError] = useState('')
   
    return (
        <div
            className={`${
                postModalVisibility
                    ? 'modal-cover modal-cover-active '
                    : 'modal-container'
            }`}
        >
            <div className="modal-container-active modal-container md:max-w-md max-w-sm rounded-sm">
                <div className="w-full border-none">
                    <div className="w-full px-4 py-4 border-grey-lightest border-b-2 ">
                        <div className="flex flex-row justify-between">
                            <p className="md:text-xl font-thin text-black pt-2">
                                Create Post
                            </p>
                            <span
                                className="justify-center px-2 py-2 rounded-full cursor-pointer"
                                onClick={() =>
                                    setPostModalVisibility(!postModalVisibility)
                                }
                            >
                                ✖️
                            </span>
                        </div>
                    </div>
                    <div className="px-4 py-4">
                        <Formik
                            onSubmit={onSubmit}
                            initialValues={initialValues}
                            validationSchema={createPostSchema}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                isValid,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                setFieldValue,
                                handleSubmit
                            }) => (
                                
                                <form onSubmit={handleSubmit}>
                                    {console.log(values)}
                                    {serverError && <p className="pb-4 text-red-light font-thin text-xs md:text-sm">{serverError}</p>}                                   
                                    {pictureError && <p className=" text-red-light font-thin text-xs md:text-sm">{pictureError}</p>}                                   

                                    {selectedImage && !pictureError && <img src={selectedImage} alt="avatar" className="max-h-screen-sm rounded-lg" />}
                                    
                                    {<p className=" text-red-light font-thin text-xs md:text-sm">{touched.featured && errors.featured}</p>}
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
                                              if (files[0].size > 2028643) {
                                                /* istanbul ignore next */
                                                setPictureError('Please select an image less than 1mb.');
                                              }
                                              setFieldValue('featured', e.currentTarget.files[0])
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
                                        }}
                                        accept="image/png, image/jpeg"
                                        />
                                    <Textbox 
                                       type="text"
                                       name="title"
                                    //    onBlur={handleBlur}
                                       value={values.title}
                                       onChange={handleChange}
                                       data-testid={'name-field'}
                                       placeholder={'Title'}
                                       error={touched.title && errors.title}
                                    />
                                   
                                    <TextArea
                                        type="body"
                                        name="body"
                                        label=""
                                        rows={10}
                                        // onBlur={handleBlur}
                                        value={values.body}
                                        onChange={handleChange}
                                        data-testid={'body-field'}
                                        placeholder={'Share your recent work with others'}
                                        error={touched.body && errors.body}
                                    />
                                    <div className="mx-4 my-4">
                                        <div className="pt-2 flex-column items-center">
                                            
                                            <div className="flex flex-row justify-between">
                                                <button type="button"  className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg" onClick={() => imageRef.current.click()}>
                                                    <Camera />
                                                    <p className="ml-2 text-grey-dark text-xs md:text-sm">Photo</p>
                                                   
                                                </button>
                                                <button  type="button" className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                                                    <Video />
                                                    <p className="ml-2 text-grey-dark text-xs md:text-sm">Video</p>
                                                </button>
                                            </div>
                                            
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
            </div>
        </div>
    )
}

export default React.memo(CreatePostModal)
