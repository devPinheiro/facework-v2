import React from 'react'
import Camera from '../../assets/image/camera.svg'
import Video from '../../assets/image/video-camera.svg'
import Edit from '../../assets/image/edit.svg'
import More from '../../assets/image/more.svg'

const CreatePostCard = () => {
    return (
        <div class="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg my-10">
            <div class="py-4 flex flex-row items-center justify-between border-grey-lightest border-b-2 cursor-pointer rounded-sm">
                <div class="flex flex-row items-center ">
                    <Edit />
                    <p class="ml-4 text-xl font-thin text-form-transparent">
                        What are you working on recently?
                    </p>
                </div>
            </div>
            <div class="mt-2">
                <div class="pt-2 flex-column items-center">
                    
                    <div className="flex flex-row justify-between">
                        <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                            <Camera />
                            <p class="ml-2 text-grey-dark text-sm">Photo</p>
                        </button>
                        <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                            <Video />
                            <p class="ml-2 text-grey-dark text-sm">Video</p>
                        </button>
                        <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                            <Edit />
                            <p class="ml-2 text-grey-dark text-sm">Write an Article</p>
                        </button>
                        <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                            <More />
                            <p class="ml-2 text-grey-dark text-sm">More</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePostCard
