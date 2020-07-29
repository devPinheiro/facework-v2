import React from 'react'
import '../../styles/main.css'
import { Link } from 'react-router-dom'

const CreatePostModal = ({ modalVisibility, setModalVisibility }) => {
  return (
    <div className={ `${modalVisibility ? 'modal-cover modal-cover-active ' : 'modal-container'}`} onClick={() => setModalVisibility(!modalVisibility)}>
      <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
            <div className="md:flex w-full border-none">

            </div>
        </div>
      </div>
  ) 
}

export default React.memo(CreatePostModal);
