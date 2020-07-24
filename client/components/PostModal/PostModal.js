import React from 'react'
import '../../styles/main.css'
const PostModal = ({ modalVisibility, setModalVisibility }) => {
console.log('heeeeeeeeeeeeeeyyyyyyyyyyyyyy');
  return (
    <div className={ `${modalVisibility ? 'modal-cover modal-cover-active ' : 'modal-container'}`} onClick={() => setModalVisibility(!modalVisibility)}>

      <div className="modal-container-active modal-container">
        <div className="modal-body">hey there</div>
        <div className="modal-footer" />
      </div>
    </div>
  ) 
}

export default React.memo(PostModal);
