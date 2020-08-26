import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, modalVisibility })=> {
    return (
        <div>
              <div className={ `${modalVisibility ? 'modal-cover modal-cover-active ' : 'modal-container'}`} >
                <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
                    {children}
                </div>
                </div>
        </div>
    )
}

Modal.propTypes = {

}

export default Modal
