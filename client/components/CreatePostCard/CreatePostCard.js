import React from 'react'
import Camera from '../../assets/image/camera.svg'
import Video from '../../assets/image/video-camera.svg'
import Edit from '../../assets/image/edit.svg'
import More from '../../assets/image/more.svg'
import CreatePostModal from '../CreatePostModal/CreatePostModal'

const CreatePostCard = ({ setPostModalVisibility, postModalVisibility, initialValues, createPostSchema, onSubmit, imageHandler, pictureError,
    setPictureError, serverError, selectedImage, selectedVideo, setSelectedImage, setSelectedVideo }) => {
    return (
        <>
        <div className="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg my-10">
            <div className="py-4 flex flex-row items-center justify-between border-grey-lightest border-b-2 cursor-pointer rounded-sm" onClick={ () => setPostModalVisibility(!postModalVisibility) } >
                <div className="flex flex-row items-center ">
                <img className="rounded-full h-6 w-6 object-cover" src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt=""/>
                    <p class="ml-3 text-sm md:text-xl font-thin text-form-transparent">
                        What are you working on currently?
                    </p>
                </div>
            </div>
            <div className="mt-2">
                <div className="pt-2 flex-column items-center">
                    
                    <div className="flex flex-row justify-between">
                        <button onClick={ () => setPostModalVisibility(!postModalVisibility) } className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                            <Camera />
                            <p className="ml-2 text-grey-dark text-xs md:text-sm">Photo</p>
                        </button>
                        <button onClick={ () => setPostModalVisibility(!postModalVisibility) } className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                            <Video />
                            <p className="ml-2 text-grey-dark text-xs md:text-sm">Video</p>
                        </button>
                        <button onClick={ () => setPostModalVisibility(!postModalVisibility) } class="flex-row items-center hidden md:flex  focus:outline-none focus:shadow-outline rounded-lg ml-3">
                            <Edit />
                            <p className="ml-2 text-grey-dark text-xs md:text-sm">Write an Article</p>
                        </button>
                        <button onClick={ () => setPostModalVisibility(!postModalVisibility) } className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                            <More />
                            <p className="ml-2 text-grey-dark text-xs md:text-sm">More</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <CreatePostModal postModalVisibility={postModalVisibility} setPostModalVisibility={setPostModalVisibility} onSubmit={onSubmit} initialValues={initialValues}
                                createPostSchema={createPostSchema} imageHandler={imageHandler}
                                pictureError={pictureError} setPictureError={setPictureError} serverError={serverError}
                                selectedImage={selectedImage} selectedVideo={selectedVideo} setSelectedImage={setSelectedImage} setSelectedVideo={setSelectedVideo}
                                /> 
        </>
    )
}

export default CreatePostCard
