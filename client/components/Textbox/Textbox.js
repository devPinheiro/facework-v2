import React from 'react'
import PropTypes from 'prop-types'

const Textbox = ({
    onChange,
    placeholder,
    onBlur,
    value,
    type,
    error,
    name,
    label
}) => (
    <div className="mb-5">
        <label className="mb-4 text-lg font-bold">{label}</label>
        <input
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            className="focus:outline-none w-full mt-2 p-4 bg-brown-lightest text-brown rounded-lg"
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
    placeholder: PropTypes.string.isRequired
}

export default Textbox
