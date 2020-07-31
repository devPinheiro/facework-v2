import React from 'react'
import '../../styles/main.css'
import { Link } from 'react-router-dom'

const CreatePostModal = ({ postModalVisibility, setPostModalVisibility }) => {
  return (
    <div className={ `${postModalVisibility ? 'modal-cover modal-cover-active ' : 'modal-container'}`} onClick={() => setPostModalVisibility(!postModalVisibility)}>
      <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
            <div className="md:flex w-full border-none">
                <p>Ho, there</p>
            </div>
        </div>
      </div>
  ) 
}

export default React.memo(CreatePostModal);
