import React, { Component } from 'react'
import AuthorCard from '@components/AuthorCard'
import Footer from '@components/Footer'
// import PropTypes from 'prop-types'

class PostFeed extends Component {
    render() {
        return (
            <>
                {' '}
                <div className="w-full flex h-screen">
                    <div className="w-1/3 my-8 mx-4">
                        <AuthorCard />
                    </div>
                    <div className="w-2/3 my-8 mx-4">
                        {' '}
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
