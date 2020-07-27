import React, { useState } from 'react'
import AuthorCard from '@components/AuthorCard'
import Footer from '@components/Footer'
import PostCard from '@components/PostCards'
import PostModal from '@components/PostModal'
// import PropTypes from 'prop-types'

// fixtures
import data from "./fixtures"

const PostFeed = props  => {
        const { slug } = props.match.params
        const [modalVisibility, setModalVisibility] = useState(false);
        const closeModal = () => {
            setModalVisibility(!modalVisibility)
            props.history.push('/feeds')
        }
        
        return (
            <>
                {' '}
                <div className="w-full m-auto max-w-2xl flex ">
                     <div className="w-full md:w-2/3 my-8 mx-4">
                       {data.map((item,key) => <PostCard title={item.title} image={item.image} key={key} time={item.time} avatar={item.avatar} name={item.name} slug={item.slug} setModalVisibility={setModalVisibility} />)}
                    </div>
                    <div className="hidden md:block md:w-1/3 ">
                       <div className="mx-4 fixed pin-r-3"><AuthorCard /></div> 
                    </div>               
                </div>
                { slug ? <PostModal modalVisibility={!!slug} setModalVisibility={closeModal} />  : null }
                <Footer />
            </>
        )
    
}

PostFeed.propTypes = {}

export default PostFeed
