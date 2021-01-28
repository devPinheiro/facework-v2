import React from 'react'
import PropTypes from 'prop-types'

const Textbox = ({
    onChange,
    placeholder,
    onBlur,
    value,
    type,
    ref,
    error,
    name,
    label,
    customStyle
}) => (
    <div className="mb-5">
        <label className="mb-4 md:text-lg text-sm text-brown-darker">{label}</label>
        <input
            ref={ref}
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            className={`${ customStyle ? customStyle : "focus:outline-none w-full mt-2 px-4 py-3 border border-grey-light text-brown-darkest rounded-lg"}`}
        />

        {error && (
            <span className="text-sm text-red-light mt-2 block">{error}</span>
        )}
    </div>
)

Textbox.propTypes = {
    type: PropTypes.string,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}

export default Textbox
