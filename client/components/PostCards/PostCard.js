import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// how to make use of the image tag

const PostCard = ({
    title,
    image,
    avatar,
    time,
    description,
    name,
    setModalVisibility,
    slug
}) => {
    return (
        <>
            <div class="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg my-10">
                <div class="py-2 flex flex-row items-center justify-between">
                    <div class="flex flex-row items-center">
                        <Link
                            to="#"
                            className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg"
                        >
                            <img
                                class="rounded-full h-10 w-10 object-cover"
                                src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80"
                                alt=""
                            />
                            <div className="flex-column ">
                                <p className="ml-3 text-sm font-medium  text-grey-dark">
                                    {name}
                                </p>
                                <p className="ml-3 text-xs py-1 text-grey-light">
                                    Developer{' '}
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class="flex flex-row items-center">
                        <p class="text-xs font-semibold text-gray-500">
                            {time}
                        </p>
                    </div>
                </div>
                <div class="mt-2">
                    <Link to={`/feeds/p/${slug}`}>
                        <img
                            class="object-cover w-full rounded-lg"
                            src={image}
                            alt=""
                        />
                    </Link>
                    <div class="py-2 flex-column items-center">
                        <p className="flex text-sm">{title}</p>
                        <div className="flex flex-row pt-4">
                            <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    class="w-5 h-5"
                                >
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                <span class="ml-1">3431</span>
                            </button>
                            <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    class="w-5 h-5"
                                >
                                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <span class="ml-1">566</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

PostCard.propTypes = {
    articleImage: PropTypes.any,
    theme: PropTypes.any,
    articleTitle: PropTypes.any,
    authorImage: PropTypes.any,
    author: PropTypes.object,
    email: PropTypes.any,
    readTime: PropTypes.any,
    image: PropTypes.any,
    title: PropTypes.string,
    slug: PropTypes.string
}

export default PostCard
