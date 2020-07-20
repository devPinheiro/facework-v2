import React, { Component } from 'react'
import AuthorCard from '@components/AuthorCard'
// import PostCard from '@components/PostCard'
import Footer from '@components/Footer'
import PostCard from '@components/PostCards'
// import PropTypes from 'prop-types'

class PostFeed extends Component {
    render() {
        return (
            <>
                {' '}
                <div className="w-full m-auto max-w-2xl flex ">
                     <div className="w-2/3 my-8 mx-4">
                        {' '}<PostCard />
                        <PostCard /> 
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                    <div className="w-1/3 mx-4 fixed pin-r">
                        <AuthorCard />
                    </div>
                   
                    
                </div>
                <Footer />
            </>
        )
    }
}

PostFeed.propTypes = {}

export default PostFeed
