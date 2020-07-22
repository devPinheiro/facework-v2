import React from 'react'

const PostModal = ({ modalVisibility, setModalVisibility }) => {
  return (
    <div className={ `${modalVisibility ? 'modal-container modal-container-active' : 'modal-container'}`} onClick={() => setModalVisibility(!modalVisibility)}>


    <div className="modal-body">hey there</div>
    <div className="modal-footer" />
      
    </div>
  )
}

export default PostModal
