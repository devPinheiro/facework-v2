import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import PostModal from '../PostModal/PostModal'

// how to make use of the image tag

const PostCard = ({
    title,
    image,
    avatar,
    time,
    description,
    name,
    setModalVisibility
  }) => {


    // const URL = `feeds/${props.slug}`
    return (
<><div class="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg my-10" onClick={() => setModalVisibility(!false)}>
      <div class="py-2 flex flex-row items-center justify-between">
        <div class="flex flex-row items-center">
          <a href="#" class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
            <img class="rounded-full h-8 w-8 object-cover" src={avatar} alt="" />
            <p class="ml-2 text-base font-medium text-gray-500">{name}</p>
          </a>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-xs font-semibold text-gray-500">{time}</p>
        </div>
      </div>
      <div class="mt-2">
        <img class="object-cover w-full rounded-lg" src={image} alt="" />
        <div class="py-2 flex-column items-center">
          <p className="flex text-sm">{title}</p>
          <div className="flex flex-row py-4">
          <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            <span class="ml-1">3431</span>
          </button>
          <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            <span class="ml-1">566</span>
          </button>
          <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
            <span class="ml-1">340</span>
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
