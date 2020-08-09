import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({
    onChange,
    placeholder,
    onBlur,
    value,
    rows,
    cols,
    error,
    name,
    label
}) => (
    <div className="mb-5">
        <label className="mb-4 md:text-lg text-sm font-bold">{label}</label>
        <textarea
            rows={rows}
            cols={cols}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            className="focus:outline-none w-full mt-2 px-4 py-3 bg-brown-lightest text-brown rounded-lg"
        />

        {error && (
            <span className="text-sm text-orange mt-2 block">{error}</span>
        )}
    </div>
)

TextArea.propTypes = {
    type: PropTypes.string,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default TextArea
