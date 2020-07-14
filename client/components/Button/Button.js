import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// components
import Loader from '@components/Loader'

const Button = ({ type = 'button', children, disabled, loading, style }) => (
    <button
        type={type}
        disabled={disabled || loading}
        className={
            style ||
            classnames(
                'focus:outline-none bg-blue rounded-lg hover:bg-blue px-4 py-3 w-full text-white text-sm md:text-xl',
                {
                    'bg-emerald': !disabled,
                    'bg-emerald-light cursor-not-allowed': disabled
                }
            )
        }
    >
        {loading && <Loader dark={false} />}
        {!loading && children}
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    style: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.any.isRequired
}

export default Button
