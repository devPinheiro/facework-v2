import React from 'react'
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


const CreatePostModal = ({
    postModalVisibility,
    setPostModalVisibility,
    onSubmit,
    initialValues,
    validationSchema
}) => {
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
                                   
                                    <TextArea
                                        type="body"
                                        label=""
                                        rows={10}
                                        onBlur={handleBlur}
                                        value={values.body}
                                        onChange={handleChange}
                                        data-testid={'body-field'}
                                        placeholder={'Share your recent work with others'}
                                        error={touched.body && errors.body}
                                    />
                                    <div className="mx-4 my-4">
                                        <div className="pt-2 flex-column items-center">
                                            
                                            <div className="flex flex-row justify-between">
                                                <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                                                    <Camera />
                                                    <p className="ml-2 text-grey-dark text-xs md:text-sm">Photo</p>
                                                </button>
                                                <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
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
