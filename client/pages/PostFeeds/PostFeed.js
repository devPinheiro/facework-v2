import React, { PureComponent } from 'react'
import AuthorCard from '@components/AuthorCard'
// import PostCard from '@components/PostCard'
import Footer from '@components/Footer'
import PostCard from '@components/PostCards'
// import PropTypes from 'prop-types'

// fixtures
import data from "./fixtures"

class PostFeed extends PureComponent {
    render() {
        return (
            <>
                {' '}
                <div className="w-full m-auto max-w-2xl flex ">
                     <div className="w-2/3 my-8 mx-4">
                       {data.map((item,key) => <PostCard title={item.title} image={item.image} key={key} time={item.time} avatar={item.avatar} />)}
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
